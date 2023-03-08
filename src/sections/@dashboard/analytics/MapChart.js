import React, { memo, useEffect } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";


const MapChart = ({ setTooltipContent, geoData }) => {
 
  

  return (
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
                    geo.properties.roadLimit,
                    geo.properties.typeApproval,
                    geo.properties.safety,
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
  );
};

export default memo(MapChart);
