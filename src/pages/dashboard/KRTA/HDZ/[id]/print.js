import { useEffect, useState } from "react";
import React from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import dynamic from 'next/dynamic'

// print Page components
import HDZSpec from "@/components/KRTAForms/print/HDZSpec";
import Drawings from "@/components/KRTAForms/print/Drawings";
import GrossWeights from "@/components/KRTAForms/print/GrossWeights";
import GroundPressure from "@/components/KRTAForms/print/GroundPressure";
import TravelSpecHX from "@/components/KRTAForms/print/TravelSpecHX";
import TravelSlope from "@/components/KRTAForms/print/TravelSlope";
import Transportation from "@/components/KRTAForms/print/Transportation";
import CompareChangeData from "@/sections/@dashboard/KRTA/CompareChangeData";

const HDZprint = () => {
    const { push, query } = useRouter();
    const [newHDZ, setNewHDZ] = useState({});

    const getHDZ = async () => {
    const response = await axios.get(`/api/HDZ/${query.id}`);
        const data = response.data;
        setNewHDZ(data);
      };
    
      useEffect(() => {
        if (query.id) getHDZ();
      }, [query.id]);

      
  return (
    <>    
    <div contentEditable={true} suppressContentEditableWarning={true}>

      <HDZSpec values={newHDZ} />
        {newHDZ.ChangeModel && <CompareChangeData values={newHDZ} type={"HDZ"} /> }
      <Drawings values={newHDZ}  />
      <GrossWeights values={newHDZ} />
      <GroundPressure values={newHDZ} />
      {/* <TravelSpecHXKatex values={newHDZ}  /> */}
      <TravelSpecHX values={newHDZ}  />
      <TravelSlope values={newHDZ}  />
      <Transportation values={newHDZ}  /> 
      {/* 
      */}
    </div>
        </>
  )
}


/* const HDZprintNoSSR = dynamic(() => Promise.resolve(HDZprint), {
  ssr: false,
}) */

  export default HDZprint