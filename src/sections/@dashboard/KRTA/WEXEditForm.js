import { useEffect, useState } from "react";
import axios from "axios";

// next
import { useRouter } from "next/router";

// utils
import useTabs from "@/hooks/useTabs";
import { useForm } from "react-hook-form";

import Summary from "@/components/KRTAForms/Summary";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Grid,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import Dimensions from "@/components/KRTAForms/Dimensions";
import DimensionsQC from "@/components/KRTAForms/DimensionsQC";
import DimensionsWheel from "@/components/KRTAForms/DimensionsWheel";
import AddDrawings from "@/components/KRTAForms/Drawings/AddDrawings";
import EngineFields from "@/components/KRTAForms/EngineFields";
import WEXCalc from "@/components/KRTAForms/WEXCalc";
import Swivel from "@/components/KRTAForms/Swivel";
import TAResult from "@/components/KRTAForms/TAResult";
import TransPortation from "@/components/KRTAForms/TransPortation";
import TravelWX from "@/components/KRTAForms/TravelWX";
import SpecSheet from "@/components/KRTAForms/previews/SpecSheetWX";
import StabilityCOG from "@/components/KRTAForms/StabilityCOG";

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

const WEXEditForm = ({
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

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const snackbarClick = () => {
    setSnackbarOpen(true);
  };
  const snackbarClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const values = watch();

  useEffect(() => {
    reset(currentModel);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, isChangeModel, currentModel]);

  const onSubmit = async (values) => {
    {WEXCalc(values)}
    
    if (isChangeModel) {
      await createWEXChange(values);
      await push("/dashboard/KRTA/WEX");
    } else if (isEdit) {
      await updateWEX(values);
    } else {
      await createWEX(values);
      await push("/dashboard/KRTA/WEX");
    }
  };

  const updateWEX = async (values) => {
    console.log("🚀 ~ file: WEXEditForm.js:116 ~ updateWEX ~ values:", values)
    
    await axios
      .put(`/api/WEX/${query.id}`, values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createWEX = async (values) => {
    values._id = values.model_name + "_" + Date.now();
    console.log(values._id);

   

    await axios
      .post("/api/WEX/", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createWEXChange = async (values) => {
    values.origin = values._id;
    delete values._id;
   
    values._id = values.model_name + "_" + Date.now();
    values.ChangeModel = true;
    values.ECN = "";
    values.approval_result = '';


    await axios
      .post("/api/WEX/", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function removeWEX() {
    const { id } = query;
    if (window.confirm("이 모델을 삭제하시겠습니까")) {
      try {
        await axios
          .delete(`/api/WEX/${id}`)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
        await push("/dashboard/KRTA/WEX");
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
          <DimensionsWheel control={control} />
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
          <TravelWX control={control} values={values} />
        </>
      ),
    },
    {
      value: "stabilityCOG",
      title: "축중 안정도",
      component: (
        <>
          <StabilityCOG control={control} values={values} />
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
                  onClick={snackbarClick}
                >
                  {!isEdit ? "Create Model" : "Save Changes"}
                </LoadingButton>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    message= {!isEdit ? "This File was updated successfully" : "This File was created successfully"}
                    onClose={snackbarClose}
                  />

                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={removeWEX}
                >
                  삭제
                </Button>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 1 }}>
              <Typography
                paragraph
                variant="overline"
                sx={{ color: "text.disabled" }}
              >
                Preview
              </Typography>
                  {/* {values.ChangeModel && <CompareSheet values={values} />} */}
              <SpecSheet values={values} />
            </Card>
          </Grid>
        </Grid>
                {WEXCalc(values)}
              {/* {JSON.stringify(values.travel, 0, 2)} */}
      </form>
    </div>
  );
};

export default WEXEditForm;
