import React, { memo, useEffect } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import geoData from "./mapWidget/mapData.json";
import axios from "axios";


const MapChart = ({ setTooltipContent, geometries }) => {
 
  
  useEffect(() => {
    geoData.objects.world.geometries = geometries;
  }, [geometries])
  

  return (
    <div>
      <ComposableMap       
>
        <Geographies data-tooltip-id="my-tooltip" geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => {
                  setTooltipContent([
                    geo.properties.name,
                    geo.properties.emission,
                    geo.properties.noise,
                    geo.properties.safety,
                    geo.properties.typeApproval,
                    geo.properties.remarks,
                  ]);
                  
                }}
                /* onMouseLeave={() => {
        // setTooltipContent("");
      }} */
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#00cc66",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);

export async function getServerSideProps() {
  const response = await axios.get("http://127.0.0.1:3000/api/PSC/Global");
  const geometries = response.data;
  return {
    props: {
      geometries,
    },
  };
}
 