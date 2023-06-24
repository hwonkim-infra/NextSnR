// ECR Template for station attachment

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SpecWECR from "@/sections/@dashboard/KRTA/SpecWECR";



const SpecECR = () => {
    const { query } = useRouter();
    const [HEXdata, setHEXdata] = useState({})

    const getHEX = async () => {
    const response = await axios.get(`/api/HEX/${query.id}`);
        const data = response.data;
        setHEXdata(data);
      };
    
      useEffect(() => {
        if (query.id) getHEX();
      }, [query.id]);

    

  return (
    <div contentEditable={true} suppressContentEditableWarning={true}>

      <SpecWECR values={HEXdata} type="HEX" />
    </div>
  )
}

export default SpecECR