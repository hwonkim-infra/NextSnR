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

export default function NPDresults({ currentNPD }) {
  // const mergedObj = Object.assign((currentNPD.Market), (NPD_MarketSpecific))
  const MarketData = currentNPD?.Market

  const marketObj = {...currentNPD?.Market, ...NPD_MarketSpecific}
  console.log(MarketData);
  console.log(marketObj);
  const [marketFiltered, setMarketFiltered] = useState(null);

  /* useEffect(() => {
    setMarketFiltered
  
  }, []) */
  
  if (!currentNPD) return <CircularProgress />;
  /* const keys = Object.keys(currentNPD);
  console.log("keys: ", keys); */
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            <SignalView
              stageSignals={currentNPD.Access}
              group="Access"
              labels={NPD_Access}
            />
            <SignalView
              stageSignals={currentNPD.Power_Train}
              group="Structure"
              labels={NPD_Structure}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            <SignalView
              stageSignals={currentNPD.Operator_Station}
              group="OperatorStation"
              labels={NPD_Station}
            />
            <SignalView
              stageSignals={currentNPD.Power_Train}
              group="Power Train"
              labels={NPD_PowerTrain}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            <SignalView
              stageSignals={currentNPD.Elec_system}
              group="Elec_system"
              labels={NPD_Electric}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            <SignalView
              stageSignals={currentNPD.Hydraulics}
              group="Hydraulics"
              labels={NPD_Hydraulic}
            />
            <SignalView
              stageSignals={currentNPD.Market}
              group="Market"
              labels={NPD_MarketSpecific}
            />
            
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
