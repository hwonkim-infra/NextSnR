import { Box, Grid, Stack, Typography } from "@mui/material";
import "react-multi-date-picker/styles/layouts/prime.css";

import SignalForm from "./SignalForm";

import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";

export default function NPDFDRform({ control, currentNPD }) {
  console.log("🚀 ~ file: NPDFDRform.js:10 ~ NPDFDRform ~ currentNPD:", currentNPD)
  const NPDStage = "FDR";
  if (!currentNPD) return <CircularProgress />;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{p:2}}>
            <>
              <Stack direction="row" >
                <Typography variant="subtitle1">Due Date:</Typography>

                <Controller
                  control={control}
                  name={`npdStage.${NPDStage}.dueDate`}
                  render={({ field }) => (
                    <>
                      <DatePicker
                        className="rmdp-prime"
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
          <SignalForm
            group={"access"}
            groupName="Access"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
          <SignalForm
            group={"structure"}
            groupName="Structure"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
        </Grid>
        <Grid item xs={3}>
          <SignalForm
            group={"operatorStation"}
            groupName="Operator Station"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
          <SignalForm
            group={"powerTrain"}
            groupName="PowerTrain Integration"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
        </Grid>

        <Grid item xs={3}>
          <SignalForm
            group={"electric"}
            groupName="E/E System"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
        </Grid>
        <Grid item xs={3}>
          <SignalForm
            group={"hydraulics"}
            groupName="Hydraulic System"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
        </Grid>
      </Grid>
    </>
  );
}
