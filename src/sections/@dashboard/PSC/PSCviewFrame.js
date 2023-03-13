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
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import useTabs from "@/hooks/useTabs";

import Iconify from "@/components/Iconify";
import parse from "html-react-parser";

const PSCviewFrame = ({ currentPSC }) => {
  const { push, query, pathname } = useRouter();
  const { currentTab, onChangeTab } = useTabs("northAmerica");

  if (!currentPSC) return <CircularProgress />;

  const REGION_TABS = [
    {
      value: "northAmerica",
      title: "북미",
      component: <>{parse(currentPSC.region?.northAmerica || "")}</>,
    },
    {
      value: "australia",
      title: "호주",
      component: <>{parse(currentPSC.region?.australia || "")}</>,
    },
    {
      value: "CUTR",
      title: "CUTR",
      component: <>{parse(currentPSC.region?.CUTR || "")}</>,
    },
    {
      value: "Brazil",
      title: "브라질",
      component: <>{parse(currentPSC.region?.brazil || "")}</>,
    },
    {
      value: "OtherRegion",
      title: "기타 지역",
      component: <>{parse(currentPSC.region?.otherRegion || "")}</>,
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Box sx={{ fontSize: "h4.fontSize" }}>{currentPSC.item}</Box>
      </Grid>

      <Grid item xs={12} md={5}>
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
          <Box sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              Regional Standard
            </Typography>
            <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={currentTab}
              onChange={onChangeTab}
            >
              {REGION_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.title}
                />
              ))}
            </Tabs>
            {REGION_TABS.map((tab) => {
              const isMatched = tab.value === currentTab;
              return isMatched && <Box key={tab.value}>{tab.component}</Box>;
            })}
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={7}>
        <Card sx={{ p: 1 }}>
          {currentPSC.actions?.map((row) => (
            <Accordion key={row?.subItem}>
              <AccordionSummary
                variant="subtitle1"
                sx={{ background: "#f2f2f2", p: 1, m: 1 }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>{row?.subItem}</Typography>
              </AccordionSummary>
              <AccordionDetails>{parse(row?.subAction || "")}</AccordionDetails>
            </Accordion>
          ))}
        </Card>
      </Grid>
    </Grid>
  );
};

export default PSCviewFrame;
