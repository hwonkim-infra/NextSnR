import {
  Box,
  CircularProgress,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

export default function SignalView({ stageSignals, group, labels }) {
  if (!stageSignals) return <CircularProgress />;

  function letterColor(value) {
    if (value.state === "green" || value.state === "red") {
      return "white";
    } else {
      return "black";
    }
  }
  // console.log(stageSignals.state)
  function signalMark(value) { return value.slice(0,1)}

  return (
    <Fragment>
      <h3>{group}</h3>

      {Object.entries(stageSignals).map(([key, value], index) => (
        <ListItem key={key}>
          <ListItemIcon>
            <Box sx={{ width: 30, height: 30 }} backgroundColor={value.state}>
              <Typography variant="h6" color={letterColor(value)} align="center">
                {value.state?.slice(0,1).toUpperCase()}
              </Typography>
            </Box>
          </ListItemIcon>
          {labels[index].label} {value?.description} {value.reference} 
        </ListItem>
      ))}
    </Fragment>
  );
}
