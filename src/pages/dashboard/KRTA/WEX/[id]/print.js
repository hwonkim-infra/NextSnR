import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

// print Page components
import GrossWeights from "@/components/KRTAForms/print/GrossWeights";
import QCouplr from "@/components/KRTAForms/print/QCouplr";
import SwivelSpeed from "@/components/KRTAForms/print/SwivelSpeed";
import Transportation from "@/components/KRTAForms/print/Transportation";
import TravelBrakingWX from "@/components/KRTAForms/print/TravelBrakingWX";
import TravelSlopeWX from "@/components/KRTAForms/print/TravelSlopeWX";
import TravelSpecHW from "@/components/KRTAForms/print/TravelSpecHW";
import WEXSpec from "@/components/KRTAForms/print/WEXSpec";
import WorkingRange from "@/components/KRTAForms/print/WorkingRange";
import Drawings from "@/components/KRTAForms/print/Drawings";

const WEXprint = () => {
  const { push, query } = useRouter();
  const [newWEX, setNewWEX] = useState({});

  const getWEX = async () => {
    const response = await axios.get(`/api/WEX/${query.id}`);
    
    const data = response.data;
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
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
    },
  };

  return (
    <div contentEditable={true} suppressContentEditableWarning={true}>
      <>
        <WEXSpec values={newWEX} />
        <Drawings values={newWEX}  />
        <WorkingRange values={newWEX} />
        <QCouplr values={newWEX} />
        <GrossWeights values={newWEX} />
        <SwivelSpeed values={newWEX} config={config} />
        <TravelSpecHW values={newWEX} config={config} />
        <TravelSlopeWX values={newWEX} config={config} />
        <TravelBrakingWX values={newWEX} config={config} />
        <Transportation values={newWEX} />
      </>
    </div>
  );
};

export default WEXprint;
