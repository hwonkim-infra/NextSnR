
import { useCallback, useEffect, useMemo } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box,  Button,  Card, Grid, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// utils
// routes
// import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import HEXinit from '@/model/HEXinit'
// components
import { FormProvider, RHFTextField } from '@/components/hook-form';
import Summary from '@/components/KRTAForms/Summary';

// ----------------------------------------------------------------------


export default function HEXEditForm({ isEdit = false, isChangeModel = false, currentModel }) {
  const { push, query, pathname } = useRouter();




  const defaultValues = HEXinit(currentModel)
  
  const methods = useForm({
    ...defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {

    if (isChangeModel && currentModel) {
      reset(defaultValues);
    }
    if (isEdit && currentModel) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, isChangeModel, currentModel]);

  /* const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
    //   enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      push("/dashboard/KRTA/HEX");
    } catch (error) {
      console.error(error);
    }
  }; */

  const onSubmit = useCallback(async (values) => {
    // if (Object.keys(errors).length) return setErrors(errors);

    if (isChangeModel){
      /* values.origin = values._id;
      delete values._id;
      console.log(values.origin); */

      await createHEXChange(values);
      await push("/dashboard/KRTA/HEX");
    } else if (isEdit) {
      await updateHEX(values);
    } else {
      await createHEX(values);
      await push("/dashboard/KRTA/HEX");
    }
  });

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


  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
       
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                // display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: 'repeat(8, 1fr)',
              }}
            >
                Form
              <Summary />
            </Box>

            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Model' : 'Save Changes'}
              </LoadingButton>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={removeHEX}>
                      삭제
                    </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
