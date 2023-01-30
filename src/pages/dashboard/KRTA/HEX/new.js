import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

// components
import Layout from "@/layouts";

// mui
import { Button, Snackbar, Stack, Grid, Tabs, Tab, Box } from "@mui/material";

// hooks
import useTabs from "@/hooks/useTabs";

// Form
import { Form, Field } from "react-final-form";
import arrayMutators from 'final-form-arrays'

// Form Components
import Summary from "@/components/KRTAForms/Summary";

import HEXCalc from "@/components/KRTAForms/HEXCalc";
import Dimensions from "@/components/KRTAForms/Dimensions";
import DimensionsTrack from "@/components/KRTAForms/DimensionsTrack";
import DimensionsQC from "@/components/KRTAForms/DimensionsQC";
import Swivel from "@/components/KRTAForms/Swivel";
import TravelHX from "@/components/KRTAForms/TravelHX";
import AddDrawings from "@/components/KRTAForms/Drawings/AddDrawings";
// import StabilityCOG from "@/components/KRTAForms/StabilityCOG";
import EngineFields from "@/components/KRTAForms/EngineFields";
import TransPortation from "@/components/KRTAForms/TransPortation";
import TAResult from "@/components/KRTAForms/TAResult";
import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";




CreateHEX.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const initialHEXState = {
  ECN: "",
  engine: { engine_name: "" },
  undercarriage: { ground_clearance: "" },
  attachments: { bucket_struck: "" },
  swivel: {
    pump_flow: "",
    
  },
  travel: {
    pump_displacement: "",
  },
  drawings: {
    exterior: "",
  },
  description: {
    swing_reduction: ""
  },
  COG: {
    upperStructure_longitudinal: ""
  },
  transport: {
    transport_1: "본체",
    transport_1_weight: "",

  }
};

export default function CreateHEX() {
  const [newHEX, setNewHEX] = useState(initialHEXState);
  const { model_name, ...rest } = newHEX;
  const { push, query } = useRouter();
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { currentTab, onChangeTab } = useTabs("dimensions");

  const snackbarClick = () => {
    setSnackbarOpen(true);
  };
  const snackbarClose = (e, reason) => {
    if (reason === "clickaway") return;
    
    setSnackbarOpen(false);
  };

  const getHEX = async () => {
    const response = await fetch(`http://localhost:3000/api/HEX/${query.id}`);

    const data = await response.json();
    setNewHEX(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getHEX();
  }, [query.id]);

  const onSubmit = async (values) => {
    if (Object.keys(errors).length) return setErrors(errors);
    if (query.id) {
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

  const removeHEX = async () => {
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

  const Form_Tabs = [
    {
      value: "dimensions",
      label: "외관 제원",
      component: (
        <>
          <Dimensions /> <DimensionsTrack /> <DimensionsQC />
        </>
      ),
    },
    {
      value: "travel",
      label: "주행 선회",
      component: (
        <>
          <Swivel /> <TravelHX />
        </>
      ),
    },
    {
      value: "drawings",
      label: "외관도",
      component: (
        <>
          <AddDrawings />
        </>
      ),
    },
    /*     {
      value: 'stability',
      label: "안정도",
      component: <><StabilityCOG /></>,
    }, */
    {
      value: "engine",
      label: "엔진 사양",
      component: (
        <>
          <EngineFields />{" "}
        </>
      ),
    },
    {
      value: "transportation",
      label: "분해 수송",
      component: (
        <>
          <TransPortation />{" "}
        </>
      ),
    },
    {
      value: "result",
      label: "승인서",
      component: (
        <>
          <TAResult />{" "}
        </>
      ),
    },
  ];

  return (
    <Grid>
      <h1>{query.id ? "Update HEX" : "Create HEX"}</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={newHEX || initialHEXState}
        mutators={{
          // potentially other mutators could be merged here
          ...arrayMutators
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  {HEXCalc(values)}
                  <Summary {...values} />

                  <Tabs
                    allowScrollButtonsMobile
                    variant="scrollable"
                    scrollButtons="auto"
                    value={currentTab}
                    onChange={onChangeTab}
                  >
                    {Form_Tabs.map((tab) => (
                      <Tab
                        disableRipple
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                      />
                    ))}
                  </Tabs>

                  {Form_Tabs.map((tab) => {
                    const isMatched = tab.value === currentTab;
                    return (
                      isMatched && <Box key={tab.value}>{tab.component}</Box>
                    );
                  })}

                  <Stack
                    direction="row"
                    spacing={3}
                    alignItems="flex-end"
                    justifyContent="space-between"
                  >
                    <Button
                      variant="outlined"
                      // startIcon={<SaveIcon />}
                      type="submit"
                      onClick={snackbarClick}
                    >
                      저장
                    </Button>
                    <Snackbar
                      open={snackbarOpen}
                      autoHideDuration={3000}
                      message="This File was updated successfully"
                      onClose={snackbarClose}
                    />

                    <Button
                  variant="contained"
                  onClick={removeHEX}
                >
                  삭제
                </Button>
                  </Stack>
                </Grid>
                <Grid item xs={5}>
                  {/* {values.ChangeModel && <CompareSheet values={values} />}
                   */}
                  <SpecSheet values={values} />

                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </Grid>
              </Grid>
              <pre> {JSON.stringify(values, 0, 2)}</pre>
            </form>
          </>
        )}
      />
    </Grid>
  );
}
