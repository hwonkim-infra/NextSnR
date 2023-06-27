import {
  CircularProgress,
  Grid,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";

import { useState } from "react";
import NPDViewGroup from "./NPDViewGroup";
import { NPDtargetMarkets } from "./NPDtargetMarkets";

export default function NPDFDRResults({ currentNPD }) {
  if (!currentNPD) return <CircularProgress />;

  const [activeMarket, setActiveMarket] = useState("All");

  const [npdDatas, setNpdDatas] = useState(currentNPD);

  function handleNPDsByMarket(e) {
    let marketNPDs = e.target.value;
    setActiveMarket(marketNPDs);

    marketNPDs !== "All"
      ? setNpdDatas(
          currentNPD.filter(
            (item) =>
              {return (item.markets === marketNPDs || item.markets.includes(marketNPDs) || item.markets === "common")}
          )
        )
      : setNpdDatas(currentNPD);
  }

  return (
    <>
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
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Access"
            group={"access"}
          />

          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Structure"
            group={"structure"}
          />
        </Grid>
        <Grid item xs={3}>
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Operator Station"
            group={"operatorStation"}
          />
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Power Train"
            group={"powerTrain"}
          />
        </Grid>
        <Grid item xs={3}>
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Electric System"
            group={"electric"}
          />
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Hydraulics"
            group={"hydraulics"}
          />
        </Grid>
        <Grid item xs={3}>
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Market Specific"
            group={"certification"}
          />
        </Grid>
      </Grid>
    </>
  );
}
