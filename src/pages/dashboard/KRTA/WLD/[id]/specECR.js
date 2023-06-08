// ECR Template for station attachment

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SpecWECR from "@/sections/@dashboard/KRTA/SpecWECR";



const SpecECR = () => {
    const { query } = useRouter();
    const [WEXdata, setWEXdata] = useState({})

    const getWEX = async () => {
    const response = await axios.get(`/api/WEX/${query.id}`);
        const data = response.data;
        setWEXdata(data);
      };
    
      useEffect(() => {
        if (query.id) getWEX();
      }, [query.id]);

    

  return (
    <div contentEditable={true} suppressContentEditableWarning={true}>

      <SpecWECR values={WEXdata} type="WEX" />
    </div>
  )
}

export default SpecECR