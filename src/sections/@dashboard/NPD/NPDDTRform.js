import { CircularProgress, Grid } from "@mui/material";


import SignalForm from "./SignalForm";

const NPDDTRform = ({ control, currentNPD }) => {
  console.log("🚀 ~ file: NPDDTRform.js:7 ~ NPDDTRform ~ currentNPD:", currentNPD)
  if (!currentNPD) return <CircularProgress />;

  const NPDStage = "DTR";


  return (
    <>
      <Grid container spacing={2}>
      <Grid item xs={3}>
        <SignalForm
            group={"access"}
            groupName="Access"
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
          

        </Grid>
        
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};

export default NPDDTRform;
