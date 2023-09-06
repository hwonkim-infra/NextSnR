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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import useTabs from "@/hooks/useTabs";

import Iconify from "@/components/Iconify";
import parse from "html-react-parser";

const regionSignal = (regionResult) => regionResult ? "✅" : "❌"

export default function OptionPSCviewFrame  ({ currentOptionPSC })  {
    if (!currentOptionPSC) return <CircularProgress />;
    const {items} = currentOptionPSC;
    // console.log("🚀 ~ file: OptionPSCviewFrame.js:38 ~ OptionPSCviewFrame ~ items:", items[0].Code)
    // const defaultTab = items[0].Code || '';
  const { push, query, pathname } = useRouter();
  
  const { currentTab, onChangeTab } = useTabs(0);


  const REGION_TABS = [
    {
      value: "northAmerica",
      title: "북미",
      component: <>{parse(currentOptionPSC.region?.northAmerica || "")}</>,
    },
    {
      value: "australia",
      title: "호주",
      component: <>{parse(currentOptionPSC.region?.australia || "")}</>,
    },
    {
      value: "CUTR",
      title: "CUTR",
      component: <>{parse(currentOptionPSC.region?.CUTR || "")}</>,
    },
    {
      value: "Brazil",
      title: "브라질",
      component: <>{parse(currentOptionPSC.region?.brazil || "")}</>,
    },
    {
      value: "OtherRegion",
      title: "기타 지역",
      component: <>{parse(currentOptionPSC.region?.otherRegion || "")}</>,
    },
  ];

  return (
    <Grid container spacing={2}>


      <Grid item xs={12} md={12}>
      

        <Card sx={{ p: 1 }}>
            <Stack direction={"row"}>

          <Box sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              Summary
            </Typography>
            <Typography variant="body2">{currentOptionPSC.summary}</Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              requirements
            </Typography>
            <Typography variant="body2">{currentOptionPSC.requirements}</Typography>
          </Box>
            </Stack>
          <Box sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              Sub Item Codes
            </Typography>
            <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={currentTab}
              onChange={onChangeTab}
            >
              {items?.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.Code}
                  value={tab.Code}
                  icon={tab.icon}
                  label={tab.Code}
                />
              ))}
            </Tabs>
            {/* 
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
             */}
            {items?.map((tab) => {
              const isMatched = tab.Code === currentTab;
              return isMatched && <Box key={tab.Code}>
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
    
      <TableRow key={tab.Code}>
        <TableCell>{tab.Code}</TableCell>
        <TableCell>{tab.Features}</TableCell>
        <TableCell>{regionSignal(tab.region.EN)}</TableCell>
        <TableCell>{regionSignal(tab.region.NA)}</TableCell>
        <TableCell>{regionSignal(tab.region.KR)}</TableCell>
        <TableCell>{regionSignal(tab.region.AUS)}</TableCell>
        <TableCell>{regionSignal(tab.region.CHN)}</TableCell>
        <TableCell>{regionSignal(tab.region.BRA)}</TableCell>
        <TableCell>{regionSignal(tab.region.CUTR)}</TableCell>
      </TableRow>

  </TableBody>
</Table>
<Card sx={{p:2}}>
<>{parse(tab.description || "")}</>
</Card>

                </Box>;
            })}
          </Box>
        </Card>
      </Grid>
     {/*  <Grid item xs={12} md={8}>
        <Card sx={{ p: 1 }}>
          {currentOptionPSC.actions?.map((row) => (
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
    {items?.map((item, index) => {
      return (
      <TableRow key={item.Code}>
        <TableCell>{item.Code}</TableCell>
        <TableCell>{item.Features}</TableCell>
        <TableCell>{regionSignal(item.region.EN)}</TableCell>
        <TableCell>{regionSignal(item.region.NA)}</TableCell>
        <TableCell>{regionSignal(item.region.KR)}</TableCell>
        <TableCell>{regionSignal(item.region.AUS)}</TableCell>
        <TableCell>{regionSignal(item.region.CHN)}</TableCell>
        <TableCell>{regionSignal(item.region.BRA)}</TableCell>
        <TableCell>{regionSignal(item.region.CUTR)}</TableCell>
      </TableRow>)
    })}

  </TableBody>
</Table>

        </Card>
      </Grid> */}
    </Grid>
  );
};

