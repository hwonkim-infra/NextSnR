import { Fragment, useState } from "react";

import useTabs from "@/hooks/useTabs";

import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
  
  import { Box, Paper, Tab, Tabs, TextField, } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const PSCRegionInputs = ({ control }) => {
  const [tabValue, setTabValue] = useState(0);
  const { currentTab, onChangeTab } = useTabs("northAmerica");

  


  const REGION_TABS = [
    {
      value: "northAmerica",
      title: "북미",
      component: (
        <>
          <Controller
                    control={control}
                    defaultValue=""
            name="region.northAmerica"
                    render={({ field: { onChange, value } }) => (
                      <>
                        <TinyEditor onChange={onChange} value={value} />
                      </>
                    )}
                  />
        </>
      ),
    },
    {
      value: "australia",
      title: "호주",
      component: (
        <>
          <Controller
            name="region.australia"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TinyEditor onChange={onChange} value={value} />
            )}
          />
        </>
      ),
    },
    {
        value: "CUTR",
        title: "CUTR",
        component: (
          <>
            <Controller
              name="region.CUTR"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TinyEditor onChange={onChange} value={value} />
              )}
            />
          </>
        ),
      },
      {
        value: "Brazil",
        title: "브라질",
        component: (
          <>
            <Controller
              name="region.brazil"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TinyEditor onChange={onChange} value={value} />
              )}
            />
          </>
        ),
      },{
        value: "OtherRegion",
        title: "기타 지역",
        component: (
          <>
            <Controller
              name="region.otherRegion"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TinyEditor onChange={onChange} value={value} />
              )}
            />
          </>
        ),
      },
  ];
  return (
    <>
      PSCRegionInputs
      
      <Paper style={{ padding: 16 }}>
      
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
        </Paper>
    </>
  );
};

export default PSCRegionInputs;
