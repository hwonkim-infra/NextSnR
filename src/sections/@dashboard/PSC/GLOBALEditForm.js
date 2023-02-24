import { useEffect } from "react";

// next
import { useRouter } from "next/router";

// utils

import { useForm } from "react-hook-form";
// import { FormProvider, RHFTextField } from "@/components/hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";

import GLOBALInputs from "./GLOBALInputs";



const GLOBALEditForm = ({
  isEdit = false,
  currentGLOBAL,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({
  });
  const { push, query, pathname } = useRouter();

  const values = watch();

  useEffect(() => {
    reset(currentGLOBAL);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit,  currentGLOBAL]);

  const onSubmit = async (values) => {
    
    if (isEdit) {
      await updateGLOBAL(values);
    } else {
      await createGLOBAL(values);
      await push("/dashboard/PSC/GLOBAL/");
    }
  };

  const updateGLOBAL = async (values) => {
    try {
      await fetch(`http://localhost:3000/api/PSC/Global/${query.id}`, {
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

 

  // const removeGLOBAL = async () => {
  async function removeGLOBAL() {
    const { id } = query;
    if (window.confirm("이 파일을 삭제하시겠습니까")) {
      try {
        await fetch(`http://localhost:3000/api/GLOBAL/${id}`, {
          method: "DELETE",
        });
        await push("/dashboard/GLOBAL/GLOBAL");
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
                <GLOBALInputs control={control}  />
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
                >
                  {!isEdit ? "Create Model" : "Save Changes"}
                </LoadingButton>
                {/* <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={removeGLOBAL}
                >
                  삭제
                </Button> */}
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 1 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Actions Detail
            </Typography>
            {/* <DetailInput control={control}  /> */}
            
              {/* <SpecSheet values={values} /> */}
              {JSON.stringify(values, 0, 2)}
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default GLOBALEditForm;
