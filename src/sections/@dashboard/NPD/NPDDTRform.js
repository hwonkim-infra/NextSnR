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
import { SignalFormComponent } from "./SignalFormComponent";

const NPDPTRform = ({ control }) => {
  const NPDStage = "DTR";

  return (
    <>
      <Grid container spacing={2}>
      
        <Grid item xs={4}>
          <SignalFormComponent
            groupItems={NPD_Access}
            NPDStage={NPDStage}
            npdDatas={npdDatas}
            groupName="Access"
            group={"access"}
            control={control}
          />
          
          
        </Grid>
        <Grid item xs={4}>
          
          
        </Grid>
        <Grid item xs={4}>


        </Grid>
      </Grid>
    </>
  );
};

export default NPDPTRform;
