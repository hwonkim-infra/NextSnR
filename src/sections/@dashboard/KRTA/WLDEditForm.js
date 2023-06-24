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
import DimensionsWLbkt from "@/components/KRTAForms/DimensionsWLbkt";
import DimensionsWheel from "@/components/KRTAForms/DimensionsWheel";
import AddDrawings from "@/components/KRTAForms/Drawings/AddDrawings";
import EngineFields from "@/components/KRTAForms/EngineFields";
import WLDCalc from "@/components/KRTAForms/WLDCalc";
import Swivel from "@/components/KRTAForms/Swivel";
import TAResult from "@/components/KRTAForms/TAResult";
import TransPortation from "@/components/KRTAForms/TransPortation";
import TravelWX from "@/components/KRTAForms/TravelWX";
import SpecSheet from "@/components/KRTAForms/previews/SpecSheetWX";
import StabilityCOG from "@/components/KRTAForms/StabilityCOG";
import CompareChangeData from "./CompareChangeData";

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

const WLDEditForm = ({
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
    {WLDCalc(values)}
    
    if (isChangeModel) {
      await createWLDChange(values);
      await push("/dashboard/KRTA/WLD");
    } else if (isEdit) {
      await updateWLD(values);
    } else {
      await createWLD(values);
      await push("/dashboard/KRTA/WLD");
    }
  };

  const updateWLD = async (values) => {
    console.log("🚀 ~ file: WLDEditForm.js:116 ~ updateWLD ~ values:", values)
    
    await axios
      .put(`/api/WLD/${query.id}`, values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createWLD = async (values) => {
    values._id = values.model_name + "_" + Date.now();
    console.log(values._id);

   

    await axios
      .post("/api/WLD/", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createWLDChange = async (values) => {
    values.origin = values._id;
    delete values._id;
   
    values._id = values.model_name + "_" + Date.now();
    values.ChangeModel = true;
    values.ECN = "";
    values.approval_result = '';


    await axios
      .post("/api/WLD/", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function removeWLD() {
    const { id } = query;
    if (window.confirm("이 모델을 삭제하시겠습니까")) {
      try {
        await axios
          .delete(`/api/WLD/${id}`)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
        await push("/dashboard/KRTA/WLD");
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
          <DimensionsWLbkt control={control} />
          <DimensionsWheel control={control} />
        </>
      ),
    },
    {
      value: "Travel",
      title: "주행",
      component: (
        <>
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
                    message= {!isEdit ? "This File was created successfully" : "This File was updated successfully"}
                    onClose={snackbarClose}
                  />

                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={removeWLD}
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
                  {/* {values.ChangeModel && <CompareChangeData values={values} type={"WLD"} />} */}
              <SpecSheet values={values} />
            </Card>
          </Grid>
        </Grid>
                {WLDCalc(values)}
              {/* {JSON.stringify(values.travel, 0, 2)} */}
      </form>
    </div>
  );
};

export default WLDEditForm;
