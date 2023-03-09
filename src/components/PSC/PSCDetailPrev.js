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

const PSCDetailPrev = ({ currentPSC }) => {
  if (!currentPSC) return <CircularProgress />;

  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" spacing={3} justifyContent="space-between" sx={{ p:1, background: "#f2f2f2" }}>
        <Box sx={{ fontSize: "h5.fontSize" }}>{currentPSC.item}</Box>
        <Button
          sx={{ m: 1 }}
          variant="outlined"
          startIcon={<EditIcon />}
          href={"/dashboard/PSC/EU/" + currentPSC?.id + "/edit"}
        >
          Edit
        </Button>
        <Button
          sx={{ m: 1 }}
          variant="outlined"
          startIcon={<PageviewIcon />}
          href={"/dashboard/PSC/EU/" + currentPSC?.id + "/view"}
        >
          View
        </Button>
      </Stack>
        
        <Box sx={{ p: 2 }}>
        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          Reference
        </Typography>
      <Typography variant="body2" >
      {currentPSC.reference}
      </Typography>

      </Box>
      <Box sx={{ p: 2 }}>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
      requirements
        </Typography>
      <Typography variant="body2" >
      {currentPSC.requirements}
      </Typography>

      </Box>
      <Box sx={{ p: 2 }}>
      {currentPSC.actions?.map((row) => (
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

export default PSCDetailPrev;
