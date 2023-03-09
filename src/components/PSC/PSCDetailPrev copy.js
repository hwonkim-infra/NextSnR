import Iconify from "@/components/Iconify";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import FolderIcon from '@mui/icons-material/Folder';

import PageviewIcon from '@mui/icons-material/Pageview';

const PSCDetailPrev = ({ currentPSC }) => {
  if (!currentPSC) return <CircularProgress />;

  return (
    <div>
      <TableContainer sx={{ "table, tr, td, th": { border: 0 } }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box sx={{ fontSize: "h5.fontSize" }}>
                  {currentPSC.item}

                  
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box sx={{ fontSize: "h8.fontSize" }}>
                  {currentPSC.reference}
                </Box>
              </TableCell>
              <TableCell >
                

                  <Button
                    sx={{ m: 1 }}
                    variant="outlined"
                  startIcon={<PageviewIcon />}
                    href={"/dashboard/PSC/EU/" + currentPSC?.id + "/edit"}
                  >
                    View
                  </Button>
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow colSpan={3}>
              <TableCell>{currentPSC.requirements}</TableCell>
            </TableRow>
            <TableRow  colSpan={3}>

            {currentPSC.actions?.map((row) => (
              
              
              <ListItem sx={{ background: "#f2f2f2"}} key={row?.subItem}>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={row?.subItem}
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                
                {/*
                  <TableRow key={row?.subItem}>
                
                                <TableCell style={{ background: "#f2f2f2" }}>
                                <Typography>{row?.subItem}</Typography>
                
                                   <Accordion>
                                    <AccordionSummary
                                      variant="subtitle1"
                                      style={{ background: "#f2f2f2" }}
                                      expandIcon={
                                        <Iconify
                                          icon={"eva:arrow-ios-downward-fill"}
                                          width={20}
                                          height={20}
                                        />
                                      }
                                    >
                                      <Typography>{row?.subItem}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      {parse(row?.subAction || "")}
                                    </AccordionDetails> 
                                  </Accordion>
                                  </TableCell>
                                  </TableRow>
                                */}

                </ListItem>

            ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PSCDetailPrev;
