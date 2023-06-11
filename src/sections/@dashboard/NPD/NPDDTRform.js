import { CircularProgress, Grid } from "@mui/material";


import SignalForm from "./SignalForm";
import DueDateComponent from "./DueDateComponent";

const NPDDTRform = ({ control, currentNPD }) => {
  console.log("🚀 ~ file: NPDDTRform.js:7 ~ NPDDTRform ~ currentNPD:", currentNPD)
  if (!currentNPD) return <CircularProgress />;

  const NPDStage = "DTR";


  return (
    <>
      <Grid container spacing={2}>
      <DueDateComponent control={control} NPDStage />
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
};

export default NPDDTRform;
