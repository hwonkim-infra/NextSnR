import { useEffect, useState } from "react";

// next
import { useRouter } from "next/router";

// utils

import { useForm } from "react-hook-form";

import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { Button, Card, Grid, Snackbar, Stack, Typography } from "@mui/material";

import axios from "axios";
import NPDitemInputs from "./NPDitemInputs";

const NPDitemForm = ({ isEdit = false, currentNPDitem }) => {
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
    reset(currentNPDitem);
  }, [isEdit, currentNPDitem]);

  const onSubmit = async (values) => {
    if (isEdit) {
      await updateNPDitem(values);
    } else {
      await createNPDitem(values);
      await push("/dashboard/NPDitem/EU");
    }
  };

  const updateNPDitem = async (values) => {
    axios
      .put(`/api/NPDitem/EU/${query.id}`, values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createNPDitem = async (values) => {    
    axios
      .post("/api/NPDitem/EU", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  async function removeNPDitem() {
    const { id } = query;
    if (window.confirm("이 파일을 삭제하시겠습니까")) {
      try {
        axios
          .delete(`/api/NPDitem/EU/${query.id}`, values)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });

        await push("/dashboard/NPDitem/EU");
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
              <NPDitemInputs control={control} />

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
                  onClick={removeNPDitem}
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
                Actions Detail
              </Typography>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
            </Card>
          </Grid>
        </Grid>
      </form>
  );
};

export default NPDitemForm;
