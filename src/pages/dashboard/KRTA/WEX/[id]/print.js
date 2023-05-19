import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// print Page components
import AxleAndLoad from A
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
