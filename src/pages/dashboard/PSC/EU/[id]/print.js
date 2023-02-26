import { useEffect, useState } from "react";
import React from 'react'
import { useRouter } from "next/router";
import axios from "axios";

// print Page components
import HEXSpec from "@/components/KRTAForms/print/HEXSpec";
import Drawings from "@/components/KRTAForms/print/Drawings";
import WorkingRange from "@/components/KRTAForms/print/WorkingRange";
import QCouplr from "@/components/KRTAForms/print/QCouplr";
import GrossWeights from "@/components/KRTAForms/print/GrossWeights";
import GroundPressure from "@/components/KRTAForms/print/GroundPressure";
import SwivelSpeed from "@/components/KRTAForms/print/SwivelSpeed";
import TravelSpecHX from "@/components/KRTAForms/print/TravelSpecHX";
import TravelSlope from "@/components/KRTAForms/print/TravelSlope";
import Transportation from "@/components/KRTAForms/print/Transportation";

const HEXprint = () => {
    const { push, query } = useRouter();
    const [newHEX, setNewHEX] = useState({});

    const getHEX = async () => {
        const response = await axios.get(`http://127.0.0.1:3000/api/HEX/${query.id}`);
    
        const data = await response.data;
        setNewHEX(data);
        console.log(data);
      };
    
      useEffect(() => {
        if (query.id) getHEX();
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
      <HEXSpec values={newHEX} />
      {/* <Drawings values={newHEX}  /> */}
      <WorkingRange values={newHEX} />
      <QCouplr values={newHEX} />
      <GrossWeights values={newHEX} />
      <GroundPressure values={newHEX} />
      <SwivelSpeed values={newHEX} config={config} />
      <TravelSpecHX values={newHEX} config={config} />
      <TravelSlope values={newHEX} config={config} />
      <Transportation values={newHEX}  />
        </>
    </div>
  )
}

export default HEXprint