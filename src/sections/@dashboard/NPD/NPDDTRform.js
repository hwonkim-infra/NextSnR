import { Grid } from "@mui/material";

import SignalComponent from "./SignalComponent";

import {
  NPD_Access,
  NPD_PowerTrain,
  NPD_Station,
  NPD_Structure,
} from "./NPDItems";
import SignalFormComponent from "./SignalFormComponent";

const NPDDTRform = ({ control, currentNPD }) => {
  console.log(
    "🚀 ~ file: NPDDTRform.js:14 ~ NPDDTRform ~ currentNPD:",
    currentNPD
  );
  const NPDStage = "DTR";

const findIndex = (arr, groupName) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].group === groupName) {
      return i;
    }
  }
  return -1;
};

console.log("StructureIndex ",findIndex(currentNPD, "structure"));

  const groupItems = (group) =>
    currentNPD?.filter((item) => item.group === group);
  console.log(
    "🚀 ~ file: NPDDTRform.js:17 ~ NPDDTRform ~ groupItems:",
    groupItems("access")
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SignalFormComponent
            groupName="Access"
            group={"access"}
            NPDStage={NPDStage}
            groupItems={currentNPD}
            control={control}
          />
         
        </Grid>
        <Grid item xs={3}>
        
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};

export default NPDDTRform;
