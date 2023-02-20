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
  Typography
} from "@mui/material";
import parse from "html-react-parser";




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
                  
                  <Button
                  sx={{m:1}}
                  variant="outlined"
                  href={"/dashboard/PSC/EU/" + currentPSC?.id+"/edit"}                  
                >
                  수정
                </Button>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box sx={{ fontSize: "h8.fontSize" }}>
                  {currentPSC.reference}
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{currentPSC.requirements}</TableCell>
            </TableRow>
            {currentPSC.actions?.map((row) => (
              <TableRow key={row?.subItem}>
                <TableCell>
                  <Accordion>
                    <AccordionSummary variant="subtitle1" expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
>
                      <Typography>{row?.subItem}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {parse(row?.subAction || "")}
                    </AccordionDetails>
                  </Accordion>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PSCDetailPrev;
