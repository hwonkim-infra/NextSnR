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
import { NPD_DTR, NPD_FDR, NPD_PVC } from "./NPDdefaultItems";
import NPDDTRform from "./NPDDTRform";
import NPDPVCform from "./NPDPVCform";
import NPDFDRform from "./NPDFDRform";

const defaultValues = {
  npdStage: {
    FDR: NPD_FDR,
    DTR: NPD_DTR,
    PVC: NPD_PVC,
  },
};

const NPDEditForm = ({ isEdit = false, currentNPD, defaultItems }) => {
  console.log( "🚀 ~ file: NPDEditForm.js:41 ~ NPDEditForm ~ defaultItems:", defaultItems );

  /* const DVCitems = defaultItems.filter((item) => item.npdStage.includes("DVC"))
  console.log("🚀 ~ file: NPDEditForm.js:44 ~ NPDEditForm ~ DVCitems:", DVCitems) */
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
          <NPDFDRform control={control} currentNPD={values.npdStage?.FDR} />
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
      value: "PVC",
      title: "PVC",
      component: (
        <>
          <NPDPVCform control={control} currentNPD={values.npdStage?.PVC} />
        </>
      ),
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} > */}
          <Card sx={{ p: 1 }}>
            <Stack direction="row" justifyContent="space-between" sx={{ p: 3 }}>
              <NPDSummary control={control} values={values} />
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
        {/* {JSON.stringify(values, 0, 2)} */}
      </>
    </form>
  );
};

export default NPDEditForm;
