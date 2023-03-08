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

const GLOBALDetailPrev = ({ currentReport }) => {
  if (!currentReport) return <CircularProgress />;

  const remarkParse = currentReport.remarks || "";

  return (
    <div>
      <Card sx={{ pt: 5, px: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Typography variant="h4">{currentReport.name}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 3 }}>
            <Box sx={{ textAlign: { sm: "right" } }}>
              <Button
                sx={{ m: 1 }}
                variant="outlined"
                href={"/dashboard/PSC/Global/" + currentReport?._id + "/edit"}
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
              Emission Level
            </Typography>
            <Typography variant="body2">{currentReport.properties.emission}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              Noise Level
            </Typography>
            <Typography variant="body2">{currentReport.properties.noise}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              수송규격
            </Typography>
            <Typography variant="body2">
              {currentReport.properties.roadLimit}
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
              {currentReport.properties.typeApproval}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} sx={{ mb: 2 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              Safety Standard
            </Typography>
            <Typography variant="body2">{currentReport.properties.safety}</Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} sx={{ mb: 2 }}>
            <Typography
              paragraph
              variant="overline"
              sx={{ color: "text.disabled" }}
            >
              remarks
            </Typography>
              {parse(remarkParse)}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default GLOBALDetailPrev;
