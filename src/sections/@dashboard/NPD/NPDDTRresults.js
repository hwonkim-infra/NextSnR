import { Box, Button, CircularProgress, Grid } from "@mui/material";
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
  if (!currentNPD) return <CircularProgress />;
  const targetMarkets = [
    "All",
    ...new Set(currentNPD.map((item) => item.market)),
  ];

  console.log(targetMarkets);

  const [activeMarket, setActiveMarket] = useState(targetMarkets);

  const [npdDatas, setNpdDatas] = useState(currentNPD);

  const activeTargetMarket = (marketBtn) => {
    if (marketBtn === "All") {
      setNpdDatas(currentNPD);
    }

    const marketFilteredNPD = currentNPD.filter(
      (item) => item.market === marketBtn
    );
    setNpdDatas(marketFilteredNPD);
  };

  function handleNPDsByMarket(e) {
    let marketNPDs = e.target.value;
    console.log(marketNPDs);

    marketNPDs !== "All"
      ? setNpdDatas(currentNPD.filter((item) => item.market === marketNPDs))
      : setNpdDatas(currentNPD);
  }

  /* const keys = Object.keys(currentNPD);
  console.log("keys: ", keys); */
  return (
    <>
      {targetMarkets.map((market, index) => {
        return (
          <Button key={index} value={market} onClick={handleNPDsByMarket}>
            {market}
          </Button>
        );
      })}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            DTR
            {npdDatas &&
              npdDatas.map((item, index) => {
                return (
                  <div key={item.name}>
                    {item.name}
                    {item.state}
                  </div>
                );
              })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
