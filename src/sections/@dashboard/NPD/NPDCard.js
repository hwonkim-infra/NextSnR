// @mui
import useTabs from "@/hooks/useTabs";
import { Box, Card, Divider, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import countColor from "./countColor";
// utils
// components

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function NPDCard({ npd }) {
  if (!npd) return null;
  const { model_name, _id, npdStage } = npd;
  const currentStage = Object.keys(npdStage)[1];
  // console.log(npdStage);

  const { currentTab, onChangeTab } = useTabs("FDR");

  const COUNT_TABS = [
    {
      value: "FDR",
      title: "FDR",
      component: (
        <>
          <Typography variant="subtitle2" color="green" sx={{ p: 1 }}>
            Greens:
            {countColor(npdStage.FDR, "green")}{" "}
          </Typography>
          <Typography variant="subtitle2" sx={{ p: 1 }}>
            Yellow:
            {countColor(npdStage.FDR, "yellow")}{" "}
          </Typography>
          <Typography variant="subtitle2" color="red" sx={{ p: 1 }}>
            Red:
            {countColor(npdStage.FDR, "red")}{" "}
          </Typography>
        </>
      ),
    },
    {
      value: "DVC",
      title: "DVC",
      component: <> <Typography variant="subtitle2" color="green" sx={{ p: 1 }}>
      Greens:
      {countColor(npdStage.DVC, "green")}{" "}
    </Typography>
    <Typography variant="subtitle2" sx={{ p: 1 }}>
      Yellow:
      {countColor(npdStage.DVC, "yellow")}{" "}
    </Typography>
    <Typography variant="subtitle2" color="red" sx={{ p: 1 }}>
      Red:
      {countColor(npdStage.DVC, "red")}{" "}
    </Typography></>,
    },
    /* {
      value: "PVC",
      title: "PVC",
      component: <> <Typography variant="subtitle2" color="green" sx={{ p: 1 }}>
      Greens:
      {countColor(npdStage.PVC, "green")}{" "}
    </Typography>
    <Typography variant="subtitle2" sx={{ p: 1 }}>
      Yellow:
      {countColor(npdStage.PVC, "yellow")}{" "}
    </Typography>
    <Typography variant="subtitle2" color="red" sx={{ p: 1 }}>
      Red:
      {countColor(npdStage.PVC, "red")}{" "}
    </Typography></>,
    }, */
  ];


  return (
    <Card sx={{ textAlign: "center" }}>
      <Link color="inherit" href={`/dashboard/PSC/NPD/${_id}/view`}>
        <Typography variant="h3" sx={{ p: 2 }}>
          {model_name}
        </Typography>
      </Link>
      <Divider sx={{ borderStyle: "dashed" }} />

      <Typography variant="subtitle1" sx={{ p: 3 }}>
        {" "}
        {currentStage.toLocaleUpperCase()}{" "}
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
          value={currentTab}
          onChange={onChangeTab}
        >
          {COUNT_TABS.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              value={tab.value}
              icon={tab.icon}
              label={tab.title}
              sx={{ textAlign: 'center' }}
            />
          ))}
        </Tabs>
        {COUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
              
              return isMatched && <Box key={tab.value}   >{tab.component}</Box>;
        })}
      </Box>
    </Card>
  );
}
