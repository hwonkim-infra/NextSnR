import {
  CircularProgress,
  Grid,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";

import { useState } from "react";
import NPDViewGroup from "./NPDViewGroup";
import { NPDtargetMarkets } from "./NPDtargetMarkets";

export default function NPDPVCResults({ currentNPD }) {
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
              {return (item.market === marketNPDs || item.market.includes(marketNPDs) || item.market === "common")}
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
            groupName="Brake system"
            group={"brake"}
          />

          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Steering System"
            group={"steering"}
          />
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Protective Structure"
            group={"protective"}
          />
        </Grid>
        <Grid item xs={3}>
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="HVAC"
            group={"HVAC"}
          />
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Object Handling"
            group={"objectHandling"}
          />
        </Grid>
        <Grid item xs={3}>
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Electrical System"
            group={"electric"}
          />
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Engine Emission"
            group={"engineEmission"}
          />
        </Grid>
        <Grid item xs={3}>
          <NPDViewGroup
            npdDatas={npdDatas}
            groupName="Noise / Vibration"
            group={"noiseVibration"}
          />
        </Grid>
      </Grid>
    </>
  );
}
