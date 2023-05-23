import {
  Box,
  Card,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

import React from "react";
import TextFieldInput from "@/components/KRTAForms/TextFieldInput";
import SignalComponent from "./SignalComponent";

import { NPD_Station, NPD_Access, NPD_Structure, NPD_PowerTrain } from "./NPDItems";

const NPDPTRform = ({ control }) => {
  const NPDStage = "pcr";

  return (
    <>
      <Grid container spacing={2}>
        <SignalComponent
          group={"Access"}
          groupItems={NPD_Access}
          NPDStage={NPDStage}
          control={control}
        />
        <SignalComponent
          group={"Operator Station"}
          groupItems={NPD_Station}
          NPDStage={NPDStage}
          control={control}
        />
        <SignalComponent
          group={"Structure"}
          groupItems={NPD_Structure}
          NPDStage={NPDStage}
          control={control}
        />
        <SignalComponent
          group={"Power Train"}
          groupItems={NPD_PowerTrain}
          NPDStage={NPDStage}
          control={control}
        />
      </Grid>
    </>
  );
};

export default NPDPTRform;
