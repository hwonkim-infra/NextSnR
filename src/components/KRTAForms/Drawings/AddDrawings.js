import React, { useState } from "react";
// utils
import useTabs from "@/hooks/useTabs";

import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import DrawingAdditional from "./DrawingAdditional";
import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
import { Controller } from "react-hook-form";
import RHFEditor from "@/components/hook-form/RHFEditor";


const AddDrawings = ({control}) => {
  const [tabValue, setTabValue] = useState(0);
  const { currentTab, onChangeTab } = useTabs("exterior");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const DRAWINGS_TABS = [
    {
      value: "exterior",
      title: "외관도",
      component: (
        <>
          <Controller
                  name="drawings.exterior"
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
      value: "boom",
      title: "붐",
      component: (
        <>
          <Controller
                  name="drawings.boom"
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
      value: "arm",
      title: "암",
      component: (
        <>
          <Controller
                  name="drawings.arm"
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
           <div className="input-group mb-1">
        <Paper style={{ padding: 16 }}>
        
        

<Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={currentTab}
              onChange={onChangeTab}
            >
              {DRAWINGS_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.title}
                />
              ))}
            </Tabs>
            {DRAWINGS_TABS.map((tab) => {
              const isMatched = tab.value === currentTab;
              return isMatched && <Box key={tab.value}>{tab.component}</Box>;
            })}
{/* 
        {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc="/tinymce/tinymce.min.js"
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )} */}
{/* 
        <Field name="drawings.exterior">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc="/tinymce/tinymce.min.js"
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
        <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={currentTab}
              onChange={onChangeTab}
            >
              {DRAWING_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.title}
                />
              ))}
            </Tabs>
            {DRAWING_TABS.map((tab) => {
              const isMatched = tab.value === currentTab;
              return isMatched && <Box key={tab.value}>{tab.component}</Box>;
            })}
 */}
        </Paper>

      </div>
    {/*   <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="외관도" {...allyProps(0)} />
          <Tab label="붐" {...allyProps(1)} />
          <Tab label="암" {...allyProps(2)} />
          <Tab label="버켓" {...allyProps(3)} />
          <Tab label="퀵커플러" {...allyProps(4)} />
          <Tab label="배토판" {...allyProps(5)} />
          <Tab label="기타" {...allyProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Field name="drawings.exterior">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc="/tinymce/tinymce.min.js"
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Field name="drawings.boom">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Field name="drawings.arm">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        버켓 도면
        <Field name="drawings.bucket">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "500", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
        1. 평적 용량.
        <Field name="drawings.bucket_capa_struck">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{
                height: "500",
                resize: true,
                menubar: false,
                placeholder: "평적 용량 자료",
              }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
        2. 산적 용량.
        <Field name="drawings.bucket_capa_heap">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{
                height: "500",
                resize: true,
                menubar: false,
                placeholder: "산적 용량 자료",
              }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        <Field name="drawings.Qcouplr">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={5}>
        <Field name="drawings.dozer">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={6}>
      <DrawingAdditional />
      

      </TabPanel> */}
    </>
  );
};

export default AddDrawings;
