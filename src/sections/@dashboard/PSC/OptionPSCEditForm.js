import { useEffect, useState } from "react";

// next
import { useRouter } from "next/router";

// utils

import { useForm } from "react-hook-form";

import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { Button, Card, Grid, Snackbar, Stack, Typography } from "@mui/material";

import axios from "axios";
import OptionPSCInputs from "./OptionPSCInputs";
import OptionDetaillInputs from "./optionDetaillInputs";


const OptionPSCEditForm = ({ isEdit = false, currentOptionPSC }) => {
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
    reset(currentOptionPSC);
  }, [isEdit, currentOptionPSC]);

  const onSubmit = async (values) => {
    if (isEdit) {
      await updateOptionPSC(values);
    } else {
      await createOptionPSC(values);
      await push("/dashboard/PSC/OptionPSC");
    }
  };

  const updateOptionPSC = async (values) => {
    axios
      .put(`/api/PSC/OptionPSC/${query.id}`, values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createOptionPSC = async (values) => {    
    axios
      .post("/api/PSC/OptionPSC/", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  async function removeOptionPSC() {
    const { id } = query;
    if (window.confirm("이 파일을 삭제하시겠습니까")) {
      try {
        axios
          .delete(`/api/PSC/OptionPSC/${query.id}`, values)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });

        await push("/dashboard/PSC/OptionPSC/");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 1 }}>
            
            <OptionPSCInputs control={control} />
              {/* 
              <OptionPSCRegionInputs control={control} /> */}

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
                  onClick={removeOptionPSC}
                >
                  삭제
                </Button>
              </Stack>
            </Card>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 1 }}>
              <Typography
                paragraph
                variant="overline"
                sx={{ color: "text.disabled" }}
              >
                Sub Options
              </Typography>
              <OptionDetaillInputs control={control} />
            </Card>
          </Grid>
        </Grid>
      </form>
  );
};

export default OptionPSCEditForm;
