import { useState, useEffect } from "react";

// next
import { useRouter } from "next/router";

// utils

import { useForm } from "react-hook-form";
// import { FormProvider, RHFTextField } from "@/components/hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, Grid, Snackbar, Stack, Typography } from "@mui/material";

import PSCInputs from "./PSCInputs";
import DetailInput from "./PSCdetailInputs";
import axios from "axios";

const PSCEditForm = ({ isEdit = false, currentPSC }) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({});
  const { push, query, pathname } = useRouter();

  const values = watch();

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

  useEffect(() => {
    reset(currentPSC);
  }, [isEdit, currentPSC]);

  const onSubmit = async (values) => {
    if (isEdit) {
      await updatePSC(values);
    } else {
      await createPSC(values);
      await push("/dashboard/PSC/EU");
    }
  };

  const updatePSC = async (values) => {
    axios
      .put(`/api/PSC/EU/${query.id}`, values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createPSC = async (values) => {
    // values._id = values.item + "_" + Date.now();
    axios
      .post("/api/PSC/EU", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const removePSC = async () => {
  async function removePSC() {
    const { id } = query;
    if (window.confirm("이 파일을 삭제하시겠습니까")) {
      try {
        axios
          .delete(`/api/PSC/EU/${query.id}`, values)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });

        await push("/dashboard/PSC/EU");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 1 }}>
              {/* <Box sx={{ }} > */}
              <PSCInputs control={control} />
              {/* </Box> */}

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
                  {!isEdit ? "Create File" : "Save Changes"}
                </LoadingButton>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    message="This File was updated successfully"
                    onClose={snackbarClose}
                  />
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={removePSC}
                >
                  삭제
                </Button>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 1 }}>
              <Typography
                paragraph
                variant="overline"
                sx={{ color: "text.disabled" }}
              >
                Actions Detail
              </Typography>
              <DetailInput control={control} />

              {/* <SpecSheet values={values} /> */}
              {/* {JSON.stringify(values, 0, 2)} */}
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PSCEditForm;
