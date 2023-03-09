// next
import { useRouter } from "next/router";

// utils

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Iconify from "@/components/Iconify";
import parse from "html-react-parser";

const PSCviewFrame = ({ currentPSC }) => {
  const { push, query, pathname } = useRouter();

  if (!currentPSC) return <CircularProgress />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
      <Box sx={{ fontSize: "h4.fontSize" }}>{currentPSC.item}</Box>

      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3 }}>
        
          <Box sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              Reference
            </Typography>
            <Typography variant="body2">{currentPSC.reference}</Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              requirements
            </Typography>
            <Typography variant="body2">{currentPSC.requirements}</Typography>
          </Box>
          <Box sx={{ p: 2 }}></Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 1 }}>
          {currentPSC.actions?.map((row) => (
            <Accordion key={row?.subItem}>
              <AccordionSummary
                variant="subtitle1"
                sx={{ background: "#f2f2f2", p:1, m:1 }}
                expandIcon={
                  <Iconify
                    icon={"eva:arrow-ios-downward-fill"}
                    width={20}
                    height={20}
                  />
                }
              >
                <Typography>{row?.subItem}</Typography>
              </AccordionSummary >
              <AccordionDetails>{parse(row?.subAction || "")}</AccordionDetails>
            </Accordion>
          ))}
        </Card>
      </Grid>
    </Grid>
  );
};

export default PSCviewFrame;
