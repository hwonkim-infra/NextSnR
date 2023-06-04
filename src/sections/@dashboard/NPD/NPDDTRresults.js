import { Box, CircularProgress, Grid } from "@mui/material";
import SignalView from "./SignalView";

import {
  NPD_Access,
  NPD_Electric,
  NPD_Hydraulic,
  NPD_MarketSpecific,
  NPD_PowerTrain,
  NPD_Station,
  NPD_Structure,
} from "./NPDItems";
import { useEffect, useState } from "react";

export default function NPDDTRResults({ currentNPD }) {
 console.log(currentNPD)
  
  if (!currentNPD) return <CircularProgress />;
  /* const keys = Object.keys(currentNPD);
  console.log("keys: ", keys); */
  return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            
            DTR
          </Box>
        </Grid>
       
      </Grid>
  );
}
