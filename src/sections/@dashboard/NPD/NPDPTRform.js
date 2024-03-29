import { Box, Grid, Stack, Typography } from "@mui/material";

import SignalComponent from "./SignalComponent";

import {
  NPD_Access,
  NPD_PowerTrain,
  NPD_Station,
  NPD_Structure,
} from "./NPDItems";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { useState } from "react";

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
        <Grid item xs={4}>
          <SignalComponent
            group={"Access"}
            groupItems={NPD_Access}
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
        <Grid item xs={4}>
          <SignalComponent
            group={"Operator_Station"}
            groupItems={NPD_Station}
            NPDStage={NPDStage}
            control={control}
          />
        </Grid>
        <Grid item xs={4}>
          <SignalComponent
            group={"Structure"}
            groupItems={NPD_Structure}
            NPDStage={NPDStage}
            control={control}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default NPDPTRform;
