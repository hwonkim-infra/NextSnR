import Iconify from "@/components/Iconify";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";

const NPDitemDetailPrev = ({ currentNPDitem }) => {
  if (!currentNPDitem) return <CircularProgress />;

  const remarkParse = currentNPDitem.remarks || "";

  return (
    <div>
      <Card sx={{ pt: 5, px: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Typography variant="h4">{currentNPDitem.name}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Box sx={{ textAlign: { sm: "right" } }}>
              <Button
                sx={{ m: 1 }}
                variant="outlined"
                href={ "/dashboard/PSC/NPDitems/" + currentNPDitem?.id + "/edit" }
              >
                수정
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              Item Name
            </Typography>
            <Typography variant="body2">{currentNPDitem.label}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              NPD Stage
            </Typography>
            <Typography variant="body2">{currentNPDitem.npdStage}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              Target Markets
            </Typography>
            <Typography variant="body2">
              {currentNPDitem.markets}
            </Typography>
          </Grid>


          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              Type Approval
            </Typography>
            <Typography variant="body2">
            </Typography>
          </Grid>

          
          
        </Grid>
      </Card>
    </div>
  );
};

export default NPDitemDetailPrev;
