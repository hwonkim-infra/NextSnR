import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

// components
import Layout from "@/layouts";

// mui
import { Button, Snackbar, Stack, Grid, Tabs, Tab, Box, TextField, Input } from "@mui/material";
import Select from "react-select";

// hooks
import useTabs from "@/hooks/useTabs";

// Form
import { useForm, Controller } from "react-hook-form";
// import ButtonsResult from "@/components/formComponents/ButtonsResult";
import { RHFTextField } from "@/components/hook-form";
import FormProvider from "@/components/hook-form/FormProvider";
import Summary from "@/components/KRTAForms/Summary";
import { LoadingButton } from "@mui/lab";

// Form Components
/* import Summary from "@/components/KRTAForms/Summary";

import HEXCalc from "@/components/KRTAForms/HEXCalc";
import Dimensions from "@/components/KRTAForms/Dimensions";
import DimensionsTrack from "@/components/KRTAForms/DimensionsTrack";
import DimensionsQC from "@/components/KRTAForms/DimensionsQC";
import Swivel from "@/components/KRTAForms/Swivel";
import TravelHX from "@/components/KRTAForms/TravelHX";
import AddDrawings from "@/components/KRTAForms/Drawings/AddDrawings";
// import StabilityCOG from "@/components/KRTAForms/StabilityCOG";
import EngineFields from "@/components/KRTAForms/EngineFields";
import TransPortation from "@/components/KRTAForms/TransPortation";
import TAResult from "@/components/KRTAForms/TAResult";
import SpecSheet from "@/components/KRTAForms/previews/SpecSheet";
 */
CreateHEX.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};




export default function CreateHEX() {
  const [data, setData] = useState(null);

  const [currentModel, setCurrentModel] = useState({});
  const { model_name, ...rest } = currentModel;
  const { push, query, pathname } = useRouter();
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  
  
  const defaultValues = useMemo(
    () => ({
      model_name: currentModel?.model_name || '',
      serial_no: currentModel?.serial_no || '',
      registration_no: currentModel?.registration_no || '',
      country: currentModel?.country || '',
      state: currentModel?.state || '',
      city: currentModel?.city || '',
      zipCode: currentModel?.zipCode || '',
      avatarUrl: currentModel?.avatarUrl || '',
      isVerified: currentModel?.isVerified || true,
      status: currentModel?.status,
      company: currentModel?.company || '',
      role: currentModel?.role || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentModel]
  );
  

  const methods = useForm({
    // resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const watchAllFields = watch();

  const snackbarClick = () => {
    setSnackbarOpen(true);
  };
  const snackbarClose = (e, reason) => {
    if (reason === "clickaway") return;

    setSnackbarOpen(false);
  };

  const getHEX = async () => {
    const response = await fetch(`http://localhost:3000/api/HEX/${query.id}`);

    const data = await response.json();
    setCurrentModel(data);
    console.log(data);
  };

  useEffect(() => {
    if (query.id) getHEX();
  }, [query.id]);



/*   useEffect(() => {
    if (isEdit && currentModel) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentModel]);
 */

  const onSubmit = useCallback(async (values) => {
    if (Object.keys(errors).length) return setErrors(errors);

    if (pathname.includes("addChange")){
      values.origin = values._id;
      delete values._id;

      await createHEXChange(values);
      await push("/dashboard/KRTA/HEX");
    } else if (query.id) {
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

/*   const Form_Tabs = [
    {
      value: "dimensions",
      label: "외관 제원",
      component: (
        <>
          <Dimensions /> <DimensionsTrack /> <DimensionsQC />
        </>
      ),
    },
    {
      value: "travel",
      label: "주행 선회",
      component: (
        <>
          <Swivel /> <TravelHX />
        </>
      ),
    },
    {
      value: "drawings",
      label: "외관도",
      component: (
        <>
          <AddDrawings />
        </>
      ),
    },

    {
      value: "engine",
      label: "엔진 사양",
      component: (
        <>
          <EngineFields />{" "}
        </>
      ),
    },
    {
      value: "transportation",
      label: "분해 수송",
      component: (
        <>
          <TransPortation />{" "}
        </>
      ),
    },
    {
      value: "result",
      label: "승인서",
      component: (
        <>
          <TAResult />{" "}
        </>
      ),
    },
  ];
 */
  // Using arrow functions or binding in JSX: the function is recreated on each render.
  return (
    <Grid>
      <h1>{query.id ? "Update HEX" : "Create HEX"}</h1>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>


            <RHFTextField name="model_name" label="기종명"   />
      {/* <input type="submit" /> */}
              {watch("model_name")}
              {/* {console.log(getValues())} */}

              <Summary />
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>Submit
              </LoadingButton>

    </FormProvider>
  
      
    </Grid>
  );
}
