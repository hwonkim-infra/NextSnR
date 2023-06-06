// next
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// hook form
import { useForm } from "react-hook-form";

// utils
import useTabs from "@/hooks/useTabs";
import NPDSummary from "./NPDSummary";
import axios from "axios";

// MUI
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
import DeleteIcon from "@mui/icons-material/Delete";
import NPDFDRform from "./NPDFDRform";
import { NPD_DTR } from "./NPDdefaultItems";
import NPDDTRform from "./NPDDTRform";

const defaultValues = {
  npdStage: {
    FDR: { Access: { stepPlatform: { state: "green", market: "EU" } } },
    DTR: NPD_DTR,
  },
};

const NPDEditForm = ({ isEdit = false, currentNPD }) => {
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
  const { currentTab, onChangeTab } = useTabs("DTR");

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
    reset(currentNPD);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentNPD]);

  const onSubmit = async (values) => {
    if (isEdit) {
      await updateNPD(values);
    } else {
      await createNPD(values);
      await push("/dashboard/PSC/NPD");
    }
  };

  const updateNPD = async (values) => {
    await axios
      .put(`/api/PSC/NPD/${query.id}`, values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createNPD = async (values) => {
    values._id = values.model_name + "_NPD_" + Date.now();
    console.log("posting values: ", values);

    await axios
      .post("/api/PSC/NPD", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function removeNPD() {
    const { id } = query;
    if (window.confirm("이 모델을 삭제하시겠습니까")) {
      try {
        await axios
          .delete(`/api/PSC/NPD/${id}`)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
        await push("/dashboard/PSC/NPD");
      } catch (error) {
        console.log(error);
      }
    }
  }

  const FORM_TABS = [
    {
      value: "FDR",
      title: "FDR",
      component: (
        <>
          <NPDFDRform control={control} />
        </>
      ),
    },
    {
      value: "DTR",
      title: "DTR FDR",
      component: (
        <>
          <NPDDTRform control={control} currentNPD={values.npdStage?.DTR} />
        </>
      ),
    },
    {
      value: "dvc",
      title: "DVC",
      component: <>DVC Stage</>,
    },
    {
      value: "pvc",
      title: "PVC",
      component: <>PVC Stage</>,
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} > */}
          <Card sx={{ p: 1 }}>
            <Box
              sx={{
                // display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: "repeat(8, 1fr)",
              }}
            >
              <NPDSummary control={control} values={values} />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ p: 3 }}
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
                message="This File was updated successfully"
                onClose={snackbarClose}
              />
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={removeNPD}
              >
                삭제
              </Button>
            </Stack>
          </Card>
        </Grid>

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

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 1 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              Preview
            </Typography>
            {/* <SpecSheet values={values} /> */}
          </Card>
        </Grid>
        {JSON.stringify(values, 0, 2)}
      </>
    </form>
  );
};

export default NPDEditForm;
