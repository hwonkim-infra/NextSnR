import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// print Page components
import Drawings from "@/components/KRTAForms/print/Drawings";
import GrossWeightsDZ from "@/components/KRTAForms/print/GrossWeightsDZ";
import GroundPressure from "@/components/KRTAForms/print/GroundPressure";
import HDZSpec from "@/components/KRTAForms/print/HDZSpec";
import Transportation from "@/components/KRTAForms/print/Transportation";
import TravelSlope from "@/components/KRTAForms/print/TravelSlope";
import TravelSpecHZ from "@/components/KRTAForms/print/TravelSpecHZ";
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
        <GrossWeightsDZ values={newHDZ} />
        <TravelSpecHZ values={newHDZ}  />
        <TravelSlope values={newHDZ}  />
      {/* <Drawings values={newHDZ}  />
        <GroundPressure values={newHDZ} />
      <Transportation values={newHDZ}  /> 
       */}
    </div>
        </>
  )
}


  export default HDZprint