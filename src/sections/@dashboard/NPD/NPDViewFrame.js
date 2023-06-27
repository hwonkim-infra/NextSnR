import {
  Box,
  CircularProgress,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
  colors,
} from "@mui/material";
import React from "react";
import NPDresults from "./NPDresults";
import useTabs from "@/hooks/useTabs";
import NPDPVCResults from "./NPDPVCresults";
import NPDFDRResults from "./NPDFDRresults";

export default function NPDViewFrame({ currentNPD }) {
  if (!currentNPD) return <CircularProgress />;
  const { currentTab, onChangeTab } = useTabs("FDR");
  

  const STAGE_TABS = [
    {
      value: "FDR",
      title: "FDR",
      component: (
        <>
          <NPDFDRResults currentNPD={currentNPD.npdStage?.FDR} />
          
        </>
      ),
    },
    /* {
      value: "DVC",
      title: "DVC",
      component: (
        <>
          <NPDDTRResults currentNPD={currentNPD.npdStage?.DVC} />
          
        </>
      ),
    }, */
    /* {
      value: "PVC",
      title: "PVC",
      component: (
        <>
          <NPDPVCResults currentNPD={currentNPD.npdStage?.PVC} />
          
        </>
      ),
    }, */
  ];
  return (
    <>
      <Tabs
        allowScrollButtonsMobile        

        variant="scrollable"
        scrollButtons="auto"
        value={currentTab}
        onChange={onChangeTab}
      >
        {STAGE_TABS.map((tab) => (
          <Tab
            disableRipple
            key={tab.value}
            value={tab.value}
            icon={tab.icon}
            label={tab.title}
          />
        ))}
      </Tabs>
      {STAGE_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </>
  );
}
