import {
  Box,
  Button,
  CircularProgress,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
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
import { NPDtargetMarkets } from "./NPDtargetMarkets";

export default function NPDDTRResults({ currentNPD }) {
  if (!currentNPD ) return <CircularProgress />;

  const [activeMarket, setActiveMarket] = useState("All");

  const [npdDatas, setNpdDatas] = useState(currentNPD);


  function handleNPDsByMarket(e) {
    let marketNPDs = e.target.value;
    console.log(marketNPDs);
    setActiveMarket(marketNPDs)

    marketNPDs !== "All"
      ? setNpdDatas(currentNPD.filter((item) => item.market === marketNPDs))
      : setNpdDatas(currentNPD);
  }


  return (
    <>
     
      <div>ToggleButtons</div>
      <ToggleButtonGroup
        value={activeMarket}
        exclusive
        onChange={handleNPDsByMarket}
      >
      {NPDtargetMarkets.map((market, index) => {
        return (
            <ToggleButton
              key={market}
              value={market}
              onClick={handleNPDsByMarket}
            >
              {market}
            </ToggleButton>
        );
      })}
      </ToggleButtonGroup>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            DTR
            {
              npdDatas.map((item, index) => {
                return <div key={item.name}>{item.name}</div>;
              })}
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}
