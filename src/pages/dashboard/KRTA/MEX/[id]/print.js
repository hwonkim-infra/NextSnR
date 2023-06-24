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
import CompareChangeData from "@/sections/@dashboard/KRTA/CompareChangeData";

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

      
  return (
    <>    
    <div contentEditable={true} suppressContentEditableWarning={true}>

      <HEXSpec values={newHEX} />
        {newHEX.ChangeModel && <CompareChangeData values={newHEX} type={"HEX"} /> }
      <Drawings values={newHEX}  />
      <WorkingRange values={newHEX} />
      <GrossWeights values={newHEX} />
      <GroundPressure values={newHEX} />
      <QCouplr values={newHEX} />
      <SwivelSpeed values={newHEX}  />
      {/* <TravelSpecHXKatex values={newHEX}  /> */}
      <TravelSpecHX values={newHEX}  />
      <TravelSlope values={newHEX}  />
      <Transportation values={newHEX}  /> 
      {/* 
      */}
    </div>
        </>
  )
}


/* const HEXprintNoSSR = dynamic(() => Promise.resolve(HEXprint), {
  ssr: false,
}) */

  export default HEXprint