import { useEffect, useState } from "react";
import React from 'react'
import { useRouter } from "next/router";

// print Page components
import styles from '@/components/KRTAForms/print/printPages.module.scss'
import HEXSpec from "@/components/KRTAForms/print/HEXSpec";
import Drawings from "@/components/KRTAForms/print/Drawings";

const HEXprint = () => {
    const { push, query } = useRouter();
    const [newHEX, setNewHEX] = useState({});

    const getHEX = async () => {
        const response = await fetch(`http://localhost:3000/api/HEX/${query.id}`);
    
        const data = await response.json();
        setNewHEX(data);
        console.log(data);
      };
    
      useEffect(() => {
        if (query.id) getHEX();
      }, [query.id]);


  return (
    <div contenteditable="true">
        {newHEX.model_name}
      <HEXSpec values={newHEX} styles={styles} />
      <Drawings values={newHEX} styles={styles}  />
    </div>
  )
}

export default HEXprint