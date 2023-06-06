import { Grid } from "@mui/material";

import SignalComponent from "./SignalComponent";

import {
  NPD_Access,
  NPD_PowerTrain,
  NPD_Station,
  NPD_Structure,
} from "./NPDItems";
import SignalFormComponent from "./SignalFormComponent";

const NPDDTRform = ({ control }) => {
  const NPDStage = "DTR";
  console.log(NPD_Access);

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
          <SignalFormComponent
            group={"Access"}
            groupItems={NPD_Access}
            NPDStage={NPDStage}
            control={control}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default NPDDTRform;
