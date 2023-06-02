import { Box, CircularProgress, Grid } from "@mui/material";
import SignalView from "./SignalView";

export default function NPDFDRresult({ currentNPD }) {
  if (!currentNPD) return <CircularProgress />;
  /* const keys = Object.keys(currentNPD);
  console.log("keys: ", keys); */
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ p: 2 }}>
            <SignalView stageSignals={currentNPD.Access} group="Access" />
            <SignalView
              stageSignals={currentNPD.Power_Train}
              group="Power Train"
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ p: 2 }}>
            <SignalView
              stageSignals={currentNPD.Operator_Station}
              group="OperatorStation"
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ p: 2 }}>
            <SignalView
              stageSignals={currentNPD.Structure}
              group="Structure"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
