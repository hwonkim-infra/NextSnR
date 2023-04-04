import { useEffect, useState } from "react";
import React from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import dynamic from 'next/dynamic'

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
import CompareChange from "@/components/KRTAForms/print/CompareChange";
import TravelSpecHXKatex from "@/components/KRTAForms/print/TravelSpecHXKATEX";

const HEXprint = () => {
    const { push, query } = useRouter();
    const [newHEX, setNewHEX] = useState({});

    const getHEX = async () => {
    const response = await axios.get(`/api/HEX/${query.id}`);
        const data = response.data;
        setNewHEX(data);
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
    <>    
    <div contentEditable={true} suppressContentEditableWarning={true}>

      <TravelSpecHXKatex values={newHEX}  />
      {/* <HEXSpec values={newHEX} />
        {newHEX.ChangeModel && <CompareChange values={newHEX} type={"HEX"} /> }
      <Drawings values={newHEX}  />
      <WorkingRange values={newHEX} />
      <QCouplr values={newHEX} />
      <GrossWeights values={newHEX} />
      <GroundPressure values={newHEX} />
      <SwivelSpeed values={newHEX} config={config} />
      <TravelSpecHX values={newHEX} config={config} />
      <TravelSlope values={newHEX} config={config} />
      <Transportation values={newHEX}  /> */}
    </div>
        </>
  )
}


const HEXprintNoSSR = dynamic(() => Promise.resolve(HEXprint), {
  ssr: false,
})

  export default HEXprintNoSSR