import {
  Box,
  CircularProgress,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import NPDSigns from "./NPDSigns";

export default function NPDViewGroup({ npdDatas, groupName, group }) {
  if (!npdDatas) return <CircularProgress />;

  return (
    <Box sx={{ p: 2 }}>
      <h3>{groupName}</h3>
      {npdDatas
        .filter((item) => item.group ===  group )
        .map((item, index) => {
          return <NPDSigns key={item.name} item={item} />;
        })}
    </Box>
  );
}
