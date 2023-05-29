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
import NPDPTRresult from "./NPDPTRresult";
import useTabs from "@/hooks/useTabs";

export default function NPDViewFrame({ currentNPD }) {
  if (!currentNPD) return <CircularProgress />;
  const { currentTab, onChangeTab } = useTabs("ptr");
  const datas = [
    {
      signal: "red",
      age: 30,
    },
    {
      signal: "green",
      age: 25,
    },
  ];

  const STAGE_TABS = [
    {
      value: "ptr",
      title: "PTR",
      component: (
        <>
          Product Target Review
          <NPDPTRresult currentNPD={currentNPD.npdStage?.ptr} />
          
        </>
      ),
    },
    {
      value: "dtr",
      title: "DTR FDR",
      component: (
        <>
          <ListItem>
            <ListItemIcon>
              <Box sx={{ width: 25, height: 25, backgroundColor: "green" }}>
                <Typography variant="h6" color="white" align="center">
                  G
                </Typography>
              </Box>
            </ListItemIcon>
            <ListItemText>Green Item</ListItemText>
          </ListItem>
        </>
      ),
    },
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
