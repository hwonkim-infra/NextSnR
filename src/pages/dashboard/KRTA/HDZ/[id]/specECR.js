// ECR Template for station attachment

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SpecWECR from "@/sections/@dashboard/KRTA/SpecWECR";



const SpecECR = () => {
    const { query } = useRouter();
    const [HDZdata, setHDZdata] = useState({})

    const getHDZ = async () => {
    const response = await axios.get(`/api/HDZ/${query.id}`);
        const data = response.data;
        setHDZdata(data);
      };
    
      useEffect(() => {
        if (query.id) getHDZ();
      }, [query.id]);

    

  return (
    <div contentEditable={true} suppressContentEditableWarning={true}>

      <SpecWECR values={HDZdata} type="HDZ" />
    </div>
  )
}

export default SpecECR

