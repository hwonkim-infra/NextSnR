import React, { memo, useEffect } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import geoData from "./mapWidget/mapData.json";

const MapChart = ({ setTooltipContent, geometries  }) => {
  // const countryName = (geo) => (`${geo.properties.name}, ${geo.id} `)
  // const countryName = (geo) => ({geo.properties})
  // const geoMetries = geoData.objects.world.geometries
  // console.log("geoMetries: ", geoData.objects.world.geometries);
  console.log("geoMetries: ", geoData.objects);
  // geoData.objects.geometries = geometries;
  /* 
  // const {}
  let CHNprop = geoMetries.find(element => element.id ==="CHN")
  CHNprop.properties.emission="lv4";

  geoMetries.find(element => element.id ==="KOR").properties={name: "South Korea", emission: "Stage V", safety: "안전기준"}
  geoMetries.find(element => element.id ==="DEU").properties.emission="Stage V"
  geoMetries.find(element => element.id ==="DEU").properties.safety="MD" */
  useEffect(() => {
    geoData.objects.world.geometries = geometries;
  }, [geometries])
  

  return (
    <div>
      <ComposableMap>
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
                    geo.properties.safety,
                  ]);
                  console.log(geo);
                  // setTooltipContent(`${geo.properties.name}, ${geo.id} `);
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
/* 
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/PSC/Global");
  const geometries = await response.json();

  return {
    props: {
      geometries,
    },
  };
}
 */