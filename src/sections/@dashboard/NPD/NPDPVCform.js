import { CircularProgress, Grid } from "@mui/material";

import SignalForm from "./SignalForm";

import React from "react";

export default function NPDPVCform({ control, currentNPD }) {
  if (!currentNPD) return <CircularProgress />;

  const NPDStage = "PVC";

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SignalForm
            group={"brake"}
            groupName="Brake system"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
          <SignalForm
            group={"steering"}
            groupName="Steering System"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
          <SignalForm
            group={"protective"}
            groupName="Protective Structure"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
        </Grid>
        <Grid item xs={3}>
          <SignalForm
            group={"HVAC"}
            groupName="HVAC"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
          <SignalForm
            group={"objectHandling"}
            groupName="Object Handling"
            NPDStage={NPDStage}
            control={control}
            currentNPD={currentNPD}
          />
        </Grid>

        <Grid item xs={3}>
        <SignalForm
          group={"electric"}
          groupName="Electrical System"
          NPDStage={NPDStage}
          control={control}
          currentNPD={currentNPD}
        />
        <SignalForm
          group={"engineEmission"}
          groupName="Engine Emission"
          NPDStage={NPDStage}
          control={control}
          currentNPD={currentNPD}
        />
        </Grid>
        <Grid item xs={3}>
        <SignalForm
          group={"noiseVibration"}
          groupName="Noise / Vibration"
          NPDStage={NPDStage}
          control={control}
          currentNPD={currentNPD}
        />
        
        </Grid>
      </Grid>
    </>
  );
}
