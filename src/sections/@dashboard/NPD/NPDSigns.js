import {
  Box,
  CircularProgress,
  Link,
  ListItem,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';

export default function NPDSigns({ item }) {
  console.log("🚀 ~ file: NPDSigns.js:12 ~ NPDSigns ~ item:", item)
  if (!item) return <CircularProgress />;

  function letterColor(value) {
    if (value.state === "green" || value.state === "red") {
      return "white";
    } else {
      return "black";
    } 
    
  }
  // console.log(stageSignals.state)

  return (
    <Fragment>
      <ListItem>
        <ListItemIcon>
          <Box sx={{ width: 30, height: 30 }} backgroundColor={item.state}>
            <Typography
              variant="h6"
              color={letterColor(item.state)}
              align="center"
            >
              {item.state?.slice(0, 1).toUpperCase()}
            </Typography>
          </Box>
        </ListItemIcon>
        <Link href={item.reference || ''}>
          
          <SourceOutlinedIcon fontSize="small"/>
        </Link>
        <Tooltip title={item.description} placement="top-start">
          <Typography >{item.label}
          </Typography>
        </Tooltip>
      </ListItem>
    </Fragment>
  );
}

/* 
<Box sx={{ width: 30, height: 30 }} backgroundColor={value.state}>
              <Typography variant="h6" color={letterColor(value)} align="center">
                {value.state?.slice(0,1).toUpperCase()}
              </Typography>
            </Box>
             */
