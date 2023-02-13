import React, { useEffect } from "react";

// next
import { useRouter } from "next/router";

// utils
import useTabs from "@/hooks/useTabs";

import { Controller, useForm } from "react-hook-form";
// import { FormProvider, RHFTextField } from "@/components/hook-form";
import TinyEditor from "./TinyEditor";
import Summary from "@/components/KRTAForms/Summary";
import { Box, Button, Card, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";

import HEXCalc from "@/components/KRTAForms/HEXCalc";
import Dimensions from "@/components/KRTAForms/Dimensions";
import Swivel from "@/components/KRTAForms/Swivel";
import DimensionsQC from "@/components/KRTAForms/DimensionsQC";
import DimensionsTrack from "@/components/KRTAForms/DimensionsTrack";
import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";
import TravelHX from "@/components/KRTAForms/TravelHX";
import AddDrawings from "@/components/KRTAForms/Drawings/AddDrawings";
import EngineFields from "@/components/KRTAForms/EngineFields";
import TransPortation from "@/components/KRTAForms/TransPortation";
import TAResult from "@/components/KRTAForms/TAResult";

const defaultValues = {
  ECN: null,
  engine: { engine_name: null },
  undercarriage: { ground_clearance: null },
  attachments: { bucket_struck: null },
  swivel: {
    pump_flow: null,
  },
  travel: {
    pump_displacement: null,
  },
  drawings: {
    exterior: null,
  },
  description: {
    swing_reduction: null,
  },
  COG: {
    upperStructure_longitudinal: null,
  },
  transport: {
    transport_1: "본체",
    transport_1_weight: null,
  },
};

const HEXEditForm = ({
  isEdit = false,
  isChangeModel = false,
  currentModel,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
  });
  const { push, query, pathname } = useRouter();
  const { currentTab, onChangeTab } = useTabs("dimensions");

  const values = watch();

  useEffect(() => {
    reset(currentModel);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, isChangeModel, currentModel]);

  const onSubmit = async (values) => {
    // if (Object.keys(errors).length) return setErrors(errors);
    // HEXSave({values, HEXCalc})

    if (isChangeModel) {
      await createHEXChange(values);
      await push("/dashboard/KRTA/HEX");
    } else if (isEdit) {
      await updateHEX(values);
    } else {
      await createHEX(values);
      await push("/dashboard/KRTA/HEX");
    }
  };

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
  async function removeHEX() {
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
  }

  const FORM_TABS = [
    {
      value: "dimensions",
      title: "기본제원",
      component: (
        <>
          <Dimensions control={control} />
          <DimensionsTrack control={control} />
          <DimensionsQC control={control} />
        </>
      ),
    },
    {
      value: "swivelTravel",
      title: "선회주행",
      component: (
        <>
          <Swivel control={control} />
          <TravelHX control={control} />
        </>
      ),
    },
    {
      value: "engine",
      title: "엔진 사양",
      component: (
        <>
          <EngineFields control={control} />
        </>
      ),
    },
    {
      value: "drawings",
      title: "도면",
      component: (
        <>
          <AddDrawings control={control} />
        </>
      ),
    },
    {
      value: "transportation",
      title: "분해 수송",
      component: (
        <>
          <TransPortation control={control} />
          
        </>
      ),
    },
    {
      value: "result",
      title: "승인서",
      component: (
        <>
          <TAResult control={control} />
          
        </>
      ),
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 1 }}>
              <Box
                sx={{
                  // display: 'grid',
                  columnGap: 2,
                  rowGap: 3,
                  gridTemplateColumns: "repeat(8, 1fr)",
                }}
              >
                {HEXCalc(values)}
                <Summary control={control} />
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
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Preview
            </Typography>
              <SpecSheet values={values} />
              {JSON.stringify(values, 0, 2)}
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default HEXEditForm;
