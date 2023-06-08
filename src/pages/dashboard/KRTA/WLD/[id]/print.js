import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// print Page components
import AxleAndLoad from "@/components/KRTAForms/print/AxleAndLoad";
import Drawings from "@/components/KRTAForms/print/Drawings";
import GrossWeights from "@/components/KRTAForms/print/GrossWeights";
import QCouplr from "@/components/KRTAForms/print/QCouplr";
import SwivelSpeed from "@/components/KRTAForms/print/SwivelSpeed";
import Transportation from "@/components/KRTAForms/print/Transportation";
import TravelBrakingWX from "@/components/KRTAForms/print/TravelBrakingWX";
import TravelRadiusHW from "@/components/KRTAForms/print/TravelRadiusHW";
import TravelSlopeWX from "@/components/KRTAForms/print/TravelSlopeWX";
import TravelSpecHW from "@/components/KRTAForms/print/TravelSpecHW";
import WEXSpec from "@/components/KRTAForms/print/WEXSpec";
import WorkingRange from "@/components/KRTAForms/print/WorkingRange";
import CompareChangeData from "@/sections/@dashboard/KRTA/CompareChangeData";

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

  

  return (
    <div contentEditable={true} suppressContentEditableWarning={true}>
      <>
        <WEXSpec values={newWEX} />
        {newWEX.ChangeModel && <CompareChangeData values={newWEX} type={"WEX"} /> }
        <Drawings values={newWEX} />
        <WorkingRange values={newWEX} />
        <QCouplr values={newWEX} />
        <GrossWeights values={newWEX} />
        <AxleAndLoad values={newWEX}  />
        <SwivelSpeed values={newWEX}  />
        <TravelSpecHW values={newWEX}  />
        <TravelRadiusHW values={newWEX}  />
        <TravelSlopeWX values={newWEX} />
        <TravelBrakingWX values={newWEX}  />
        <Transportation values={newWEX} />
      </>
    </div>
  );
};

export default WEXprint;
