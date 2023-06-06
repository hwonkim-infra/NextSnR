import { Box, Grid, Stack, Typography } from "@mui/material";

import SignalComponent from "./SignalComponent";

import {
  NPD_Access,
  NPD_Electric,
  NPD_Hydraulic,
  NPD_MarketSpecific,
  NPD_PowerTrain,
  NPD_Station,
  NPD_Structure,
} from "./NPDItems";
import { Controller, reset, register } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { useState, useEffect } from "react";

const NPDPTRform = ({ control }) => {
  const NPDStage = "FDR";
  // const [date, setDate] = useState(new Date());

  
 

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box align={"center"}>
            <>
              <Stack direction="row">
                <Typography variant="subtitle1">Due Date:</Typography>

                <Controller
                  control={control}
                  name={`npdStage.${NPDStage}.dueDate`}
                  render={({ field }) => (
                    <>
                      <DatePicker
                        label="Due Date"
                        selected={Date.parse(field.value)}
                        onChange={(e) => field.onChange(e)}
                        value={field.value || ""}
                      />
                    </>
                  )}
                />
              </Stack>
            </>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <SignalComponent
            group={"Access"}
            groupItems={NPD_Access}
            NPDStage={NPDStage}
            control={control}
          />
          <SignalComponent
            group={"Structure"}
            groupItems={NPD_Structure}
            NPDStage={NPDStage}
            control={control}
          />
        </Grid>

{/* 

        <Grid item xs={3}>
          <SignalComponent
            group={"Operator_Station"}
            groupItems={NPD_Station}
            NPDStage={NPDStage}
            control={control}
          />
          <SignalComponent
            group={"Power_Train"}
            groupItems={NPD_PowerTrain}
            NPDStage={NPDStage}
            control={control}
          />
        </Grid>
        <Grid item xs={3}>
          <SignalComponent
            group={"Elec_system"}
            groupItems={NPD_Electric}
            NPDStage={NPDStage}
            control={control}
          />
        </Grid>
        <Grid item xs={3}>
          <SignalComponent
            group={"Hydraulics"}
            groupItems={NPD_Hydraulic}
            NPDStage={NPDStage}
            control={control}
          />
          <SignalComponent
            group={"Market"}
            groupItems={NPD_MarketSpecific}
            NPDStage={NPDStage}
            control={control}
          />
        </Grid>
         */}
      </Grid>
    </>
  );
};

export default NPDPTRform;
