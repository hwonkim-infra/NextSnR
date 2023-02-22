import React, { useState } from 'react'
import { Tooltip } from "react-tooltip";
import MapChart from './MapChart';

const SnRMapChart = () => {
    const [content, setContent] = useState("");

  return (
    <div>
              <MapChart  setTooltipContent={setContent} />
              <Tooltip id="my-tooltip" > {content}</Tooltip>

    </div>
  )
}

export default SnRMapChart