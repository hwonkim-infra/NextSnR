import { useEffect, useState } from "react";
import React from 'react'
import { useRouter } from "next/router";

// print Page components
import WEXSpec from "@/components/KRTAForms/print/WEXSpec";
import Drawings from "@/components/KRTAForms/print/Drawings";
import WorkingRange from "@/components/KRTAForms/print/WorkingRange";
import QCouplr from "@/components/KRTAForms/print/QCouplr";
import GrossWeights from "@/components/KRTAForms/print/GrossWeights";
import GroundPressure from "@/components/KRTAForms/print/GroundPressure";
import SwivelSpeed from "@/components/KRTAForms/print/SwivelSpeed";
import TravelSpecHX from "@/components/KRTAForms/print/TravelSpecHX";
import TravelSlope from "@/components/KRTAForms/print/TravelSlope";
import Transportation from "@/components/KRTAForms/print/Transportation";

const WEXprint = () => {
    const { push, query } = useRouter();
    const [newWEX, setNewWEX] = useState({});

    const getWEX = async () => {
        const response = await fetch(`http://localhost:3000/api/WEX/${query.id}`);
    
        const data = await response.json();
        setNewWEX(data);
        console.log(data);
      };
    
      useEffect(() => {
        if (query.id) getWEX();
      }, [query.id]);

      const config = {
        loader: { load: ["[tex]/html"] },
        tex: {
          packages: { "[+]": ["html"] },
          inlineMath: [
            ["$$", "$$"],
            ["\\(", "\\)"]
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"]
          ]
        }
      };
    

  return (
    <div contentEditable="true">
        <>
      <WEXSpec values={newWEX} />
      {/* <Drawings values={newWEX}  /> */}
      <WorkingRange values={newWEX} />
      <QCouplr values={newWEX} />
      <GrossWeights values={newWEX} />
      {/* <GroundPressure values={newWEX} /> */}
      <SwivelSpeed values={newWEX} config={config} />
      <TravelSpecHX values={newWEX} config={config} />
      {/* <TravelSlope values={newWEX} config={config} /> */}
      {/* <Transportation values={newWEX}  /> */}
        </>
    </div>
  )
}

export default WEXprint