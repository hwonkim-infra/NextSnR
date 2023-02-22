import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const MapChart = ({ setTooltipContent }) => {
  const countryName = (geo) => (`${geo.properties.name}, ${geo.id} `)

  return (
    <div >
      <ComposableMap>
          <Geographies data-tooltip-id="my-tooltip" geography="/features.json">
            {({ geographies }) =>

geographies.map((geo) => (
    <Geography
      key={geo.rsmKey}
      geography={geo}
      onMouseDown={e=>e.preventDefault()}
      onMouseEnter={() => {
        setTooltipContent(countryName(geo));
        // setTooltipContent(`${geo.properties.name}, ${geo.id} `);
      }}
      /* onMouseLeave={() => {
        // setTooltipContent("");
      }} */
      style={{
        default: {
          fill: "#D6D6DA",
          outline: "none"
        },
        hover: {
          fill: "#00cc66",
          outline: "none"
        },
        pressed: {
          fill: "#E42",
          outline: "none"
        }
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
