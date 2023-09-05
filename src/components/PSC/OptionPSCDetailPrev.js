import Iconify from "@/components/Iconify";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import FolderIcon from "@mui/icons-material/Folder";
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from "@mui/icons-material/Pageview";

const OptionPSCDetailPrev = ({ currentOptionPSC }) => {
  if (!currentOptionPSC) return <CircularProgress />;
  const {items} = currentOptionPSC;
  const {region} = currentOptionPSC.items;

  console.log("🚀 ~ file: OptionPSCDetailPrev.js:34 ~ OptionPSCDetailPrev ~ items:", items)

  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" spacing={3} justifyContent="space-between" sx={{ p:1, background: "#f2f2f2" }}>
        <Box sx={{ fontSize: "h5.fontSize" }}>{currentOptionPSC.optionName}</Box>
        
        <Button
          sx={{ m: 1 }}
          variant="outlined"
          startIcon={<PageviewIcon />}
          href={"/dashboard/PSC/OptionPSC/" + currentOptionPSC?.id + "/view"}
        >
          View
        </Button>
      </Stack>
        
        <Box sx={{ p: 2 }}>
        
      <Typography variant="body2" >
      {currentOptionPSC.summary}
      </Typography>

      </Box>
<Table>
  <TableHead>
    <TableRow>
      <TableCell>Code</TableCell>
      <TableCell>Features</TableCell>
      <TableCell>EN</TableCell>
      <TableCell>NA</TableCell>
      <TableCell>KR</TableCell>
      <TableCell>AUS</TableCell>
      <TableCell>CHN</TableCell>
      <TableCell>BRA</TableCell>
      <TableCell>CUTR</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {items.map((item, index) => {
      return (
      <TableRow key={item.Code}>
        <TableCell>{item.Code}</TableCell>
        <TableCell>{item.Features}</TableCell>
        <TableCell>{item.region.EN}</TableCell>
        <TableCell>{item.region.NA}</TableCell>
        <TableCell>{item.region.KR}</TableCell>
        <TableCell>{item.region.AUS}</TableCell>
        <TableCell>{item.region.CHN}</TableCell>
        <TableCell>{item.region.BRA}</TableCell>
        <TableCell>{item.region.CUTR}</TableCell>
      </TableRow>)
    })}

  </TableBody>
</Table>

      
      <Box sx={{ p: 2 }}>
      {currentOptionPSC.actions?.map((row) => (
                <ListItem sx={{  }} key={row?.subItem}>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={row?.subItem}
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                  </ListItem>
              ))}

      </Box>

     
    </Card>
  );
};

export default OptionPSCDetailPrev;
