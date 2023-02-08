import { useCallback, useEffect, useMemo, useState } from "react";
// next
import { useRouter } from "next/router";
// form
import { useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, Grid, Stack, Tab, Tabs } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// utils
import useTabs from "@/hooks/useTabs";
// routes
// import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import HEXinit from "@/model/HEXinit2";
// components
import { FormProvider, RHFTextField } from "@/components/hook-form";
import Summary from "@/components/KRTAForms/Summary";
import Dimensions from "@/components/KRTAForms/Dimensions";
import Swivel from "@/components/KRTAForms/Swivel";
import DimensionsQC from "@/components/KRTAForms/DimensionsQC";
import DimensionsTrack from "@/components/KRTAForms/DimensionsTrack";
import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";
import {HEX_Calc} from "@/components/KRTAForms/HEXCalc2";

// ----------------------------------------------------------------------

export default function HEXEditForm({ isEdit = false, isChangeModel = false, currentModel, }) {
  const { push, query, pathname } = useRouter();
  
  const { currentTab, onChangeTab } = useTabs("dimensions");
  
  const defaultValues = useMemo(() =>(HEXinit(currentModel)));
  
  
  const [calValue, setCalValue] = useState(defaultValues);
  

  const methods = useForm({
    ...defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  //  {values.attachments.bucket_exca_capa = Number(values.attachments?.bucket_heap) * 1500}
  HEX_Calc(values)
  
  
  useEffect(() => {
    // HEXCalc(defaultValues);
    reset(defaultValues);
    
                  
                  /* if (isChangeModel && currentModel) {
      reset(defaultValues);
    }
    if (isEdit && currentModel) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    } */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, isChangeModel, currentModel]);
  
  

  const onSubmit = (async (values) => {
    // if (Object.keys(errors).length) return setErrors(errors);
    // values.grossWeight = Number(values.operating_weight) + 65;
                  // HEXCalc(values);

    if (isChangeModel) {
      await createHEXChange(values);
      await push("/dashboard/KRTA/HEX");
    } else if (isEdit) {
      await updateHEX(values);
    } else {
      await createHEX(values);
      await push("/dashboard/KRTA/HEX");
    }
  });

  const updateHEX = async (values) => {
    try {
      await fetch(`http://localhost:3000/api/HEX/${query.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createHEX = async (values) => {
    values._id = values.model_name + "_" + Date.now();
    try {
      await fetch("http://localhost:3000/api/HEX/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createHEXChange = async (values) => {
    values.origin = values._id;
    delete values._id;
    values._id = values.model_name + "_" + Date.now();
    try {
      await fetch("http://localhost:3000/api/HEX/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // const removeHEX = async () => {
  async function removeHEX () {
    const { id } = query;
    if (window.confirm("이 모델을 삭제하시겠습니까")) {
      try {
        await fetch(`http://localhost:3000/api/HEX/${id}`, {
          method: "DELETE",
        });
        await push("/dashboard/KRTA/HEX");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const FORM_TABS = [
    {
      value: "dimensions",
      title: "기본제원",
      component: (
        <>
          <Dimensions /> 
          <DimensionsTrack /> 
          <DimensionsQC />
        </>
      ),
    },
    {
      value: "swivelTravel",
      title: "선회주행",
      component: (
        <>
          <Swivel />
        </>
      ),
    },
    
  ];


  
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 1 }}>
            {/* {HEX_Calc(values)} */}
            <Box
              sx={{
                // display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: "repeat(8, 1fr)",
              }}
              >
              <Summary />
              { HEX_Calc.grossWeight }
            </Box>
            <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={currentTab}
              onChange={onChangeTab}
            >
              {FORM_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.title}
                />
              ))}
            </Tabs>
            {FORM_TABS.map((tab) => {
              const isMatched = tab.value === currentTab;
              return isMatched && <Box key={tab.value}>{tab.component}</Box>;
            })}

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ mt: 3 }}
            >
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                {!isEdit ? "Create Model" : "Save Changes"}
              </LoadingButton>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={removeHEX}
              >
                삭제
              </Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 1 }}>
            Preview
            <SpecSheet values={values} />
          </Card>
      </Grid>
      </Grid>
      {/* {values.attachments.bucket_exca_capa = Number(values.attachments?.bucket_heap) * 1500} */}
    </FormProvider>
  );
}
