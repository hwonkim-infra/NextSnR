import { useEffect, useState } from "react";

// next
import { useRouter } from "next/router";

// utils

import { useForm } from "react-hook-form";

import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { Button, Card, Grid, Snackbar, Stack, Typography } from "@mui/material";

import axios from "axios";
import NoiseCertiInputs from "./NoiseCertiInputs";
import NoiseCertiModelInputs from "./NoiseCertiModelInputs";

const NoiseCertiEditForm = ({ isEdit = false, currentNoiseCerti }) => {
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
    reset(currentNoiseCerti);
  }, [isEdit, currentNoiseCerti]);

  const onSubmit = async (values) => {
    
    if (isEdit) {
      await updateNoiseCerti(values);
    } else {
      await createNoiseCerti(values);
      await push("/dashboard/TCF/NoiseCerti");
    }
  };

  const updateNoiseCerti = async (values) => {
    axios
      .put(`/api/TCF/NoiseCerti/${query.id}`, values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createNoiseCerti = async (values) => {    
    axios
      .post("/api/TCF/NoiseCerti", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  async function removeNoiseCerti() {
    const { id } = query;
    if (window.confirm("이 파일을 삭제하시겠습니까")) {
      try {
        axios
          .delete(`/api/TCF/NoiseCerti/${query.id}`, values)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });

        await push("/dashboard/TCF/NoiseCerti");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Card sx={{ p: 1 }}>
              <NoiseCertiInputs control={control} />

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
                  onClick={removeNoiseCerti}
                >
                  삭제
                </Button>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 1 }}>
              <Typography
                paragraph
                variant="overline"
                sx={{ color: "text.disabled" }}
              >
                Noise Guaranteed Tested
              </Typography>
              <NoiseCertiModelInputs control={control} />
            </Card>
          </Grid>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
        </Grid>
      </form>
  );
};

export default NoiseCertiEditForm;
