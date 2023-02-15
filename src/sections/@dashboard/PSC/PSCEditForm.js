import React, { useEffect } from "react";

// next
import { useRouter } from "next/router";

// utils
import useTabs from "@/hooks/useTabs";

import { Controller, useForm } from "react-hook-form";
// import { FormProvider, RHFTextField } from "@/components/hook-form";
import TinyEditor from "./TinyEditor";
import Summary from "@/components/PSCForms/Summary";
import { Box, Button, Card, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";

import PSCInputs from "./PSCInputs";

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

const PSCEditForm = ({
  isEdit = false,
  currentPSC,
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

  const values = watch();

  useEffect(() => {
    reset(currentPSC);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, isChangeModel, currentPSC]);

  const onSubmit = async (values) => {
    // if (Object.keys(errors).length) return setErrors(errors);
    // PSCSave({values, PSCCalc})

    if (isEdit) {
      await updatePSC(values);
    } else {
      await createPSC(values);
      await push("/dashboard/PSC/EU");
    }
  };

  const updatePSC = async (values) => {
    try {
      await fetch(`http://localhost:3000/api/PSC/${query.id}`, {
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

  const createPSC = async (values) => {
    values._id = values.model_name + "_" + Date.now();
    try {
      await fetch("http://localhost:3000/api/PSC/", {
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

  const createPSCChange = async (values) => {
    values.origin = values._id;
    delete values._id;
    values._id = values.model_name + "_" + Date.now();
    try {
      await fetch("http://localhost:3000/api/PSC/", {
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

  // const removePSC = async () => {
  async function removePSC() {
    const { id } = query;
    if (window.confirm("이 파일을 삭제하시겠습니까")) {
      try {
        await fetch(`http://localhost:3000/api/PSC/${id}`, {
          method: "DELETE",
        });
        await push("/dashboard/PSC/PSC");
      } catch (error) {
        console.log(error);
      }
    }
  }

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
                <PSCInputs control={control}  />
              </Box>
              
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
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 1 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Preview
            </Typography>
              {/* <SpecSheet values={values} /> */}
              {JSON.stringify(values, 0, 2)}
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PSCEditForm;
