import {
    Grid
} from "@mui/material";

import SignalComponent from "./SignalComponent";

import {
    NPD_Access,
    NPD_PowerTrain,
    NPD_Station,
    NPD_Structure,
} from "./NPDItems";

const NPDPTRform = ({ control }) => {
  const NPDStage = "dtr";

  return (
    <>
      <Grid container spacing={2}>
      
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
