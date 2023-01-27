import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

// components
import Layout from "../../../../layouts";

// mui
import { Button, Snackbar, Stack, Grid } from "@mui/material";
// import {SaveIcon, DeleteIcon} from "@mui/icons-material";
// DataGrid
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Summary from "@/components/KRTAForms/Summary";
import { Form, Field } from "react-final-form";



import HEXCalc from "@/components/KRTAForms/HEXCalc";

CreateHEX.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const initialHEXState = {
  ECN: "",
  engine: {},
  undercarriage: {},
  attachments: {},
  swivel: {},
  travel: {},
  drawings: {},
  description: {},
  COG: {},
  transport: {},
};

export default function CreateHEX() {
  const [newHEX, setNewHEX] = useState(initialHEXState);
  const { model_name,  ...rest } = newHEX;
  // newHEX._id = model_name + "_" + Date.now()
  const { push, query } = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});
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


  const getHEX = async () => {
    const response = await fetch(`http://localhost:3000/api/HEX/${query.id}`);
    const data = await response.json();
    setNewHEX({
      model_name: data.model_name,
      ...rest,
    });
  };

  useEffect(() => {
    if (query.id) getHEX();
    console.log(query.id);
  }, [query.id]);

  /*   const validate = () => {
    let errors = {};
    if (!title) return (errors.title = "Title is required");
    if (!description) return (errors.description = "description is required");
    return errors;
  }; */

  const onSubmit = async (values) => {
    console.log("🚀 ~ file: new.js:80 ~ onSubmit ~ values", values)
    // e.preventDefault();
    // let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if (query.id) {
      await updateHEX(values);
    } else {
      await createHEX(values);
    }
    await push("/");
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
    // const { model_name, ...rest } = req.body;
    values._id = values.model_name+"_"+ Date.now()
    try {
      await fetch("http://localhost:3000/api/HEX/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values)
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHEX({ ...newHEX, [name]: value, });
  };

  // const genID = (values) => (values._id = values.model_name+"_"+ Date.now())

  return (
    <Grid>
      New
      <h1>{query.id ? "Update HEX" : "Create HEX"}</h1>
      <Form
      onSubmit={onSubmit}
      initialValues={initialHEXState}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <>
        <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
        <Grid item xs={7}>
                  {/* {HEXCalc(values)} */}
                  <Summary {...values}/>
                  {/* <Tabs defaultActiveKey="dimension" className="mb-3">
                    <Tab eventKey="dimension" title="외관 제원">
                      <Dimensions values={values} />
                      <DimensionsTrack />
                      <DimensionsQC />

                    </Tab>

                    <Tab eventKey="travel" title="주행 선회">
                      <Swivel />
                      <TravelHX />
                    </Tab>

                    <Tab eventKey="drawings" title="외관도">
                      <AddDrawings />
                    </Tab>

                    <Tab eventKey="stability" title="안정도">
                      <StabilityCOG {...values} />
                    </Tab>

                    <Tab eventKey="engine" title="엔진 사양">
                      <EngineFields {...values} />
                    </Tab>

                    <Tab eventKey="transportation" title="분해 수송">
                      <TransPortation {...values} />
                    </Tab>

                    <Tab eventKey="result" title="승인서">
                      <TAResult />
                    </Tab>
                  </Tabs> */}

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

                {/* <Button
                  variant="contained"
                  // startIcon={<DeleteIcon />}
                  onClick={remove}
                >
                  삭제
                </Button> */}
            
          </Stack>


              </Grid>
        <Grid item xs={5}>
                  {/* {values.ChangeModel && <CompareSheet values={values} />}
                  <SpecSheet values={values} /> */}

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
