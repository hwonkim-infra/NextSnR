import { useState } from "react";
// utils
import useTabs from "@/hooks/useTabs";

import Iconify from "@/components/Iconify";
import { Box, Button, Paper, Tab, Tabs, TextField } from "@mui/material";

import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const AddDrawings = ({ control }) => {
  const [tabValue, setTabValue] = useState(0);
  const { currentTab, onChangeTab } = useTabs("exterior");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const { register } = useForm({
    defaultValues: {
      appendix: [{ subItem: "", subDrawing: "" }],
    },
  });
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "appendix",
  });

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
    {
      value: "bucket",
      title: "버켓",
      component: (
        <>
          <Controller
            name="drawings.bucket"
            control={control}
            defaultValue="버켓 도면"
            render={({ field: { onChange, value } }) => (
              <TinyEditor onChange={onChange} value={value} />
            )}
          />
          <Controller
            name="drawings.bucket_capa_struck"
            control={control}
            defaultValue="평적 용량 자료"
            render={({ field: { onChange, value } }) => (
              <TinyEditor onChange={onChange} value={value} />
            )}
          />
          <Controller
            name="drawings.bucket_capa_heap"
            control={control}
            defaultValue="산적 용량 자료"
            render={({ field: { onChange, value } }) => (
              <TinyEditor onChange={onChange} value={value} />
            )}
          />
        </>
      ),
    },
    {
      value: "Qcouplr",
      title: "퀵커플러",
      component: (
        <>
          <Controller
            name="drawings.Qcouplr"
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
      value: "dozer",
      title: "배토판",
      component: (
        <>
          <Controller
            name="drawings.dozer"
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
      value: "ETC",
      title: "기타",
      component: (
        <>
          <ul>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <Controller
                    render={({ field }) => <TextField {...field} />}
                    name={`appendix.${index}.subItem`}
                    defaultValue=""
                    control={control}
                  />
                  <Button
                    size="small"
                    color="error"
                    startIcon={<Iconify icon="eva:trash-2-outline" />}
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                  <Controller
                    control={control}
                    defaultValue=""
                    name={`appendix.${index}.subDrawing`}
                    render={({ field: { onChange, value } }) => (
                      <>
                        <TinyEditor onChange={onChange} value={value} />
                      </>
                    )}
                  />
                </li>
              );
            })}
          </ul>

          <section>
            <Button
              size="small"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={() => {
                prepend({});
              }}
              sx={{ flexShrink: 0 }}
            >
              Add Previous Item
            </Button>
            <Button
              size="small"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={() => {
                append({});
              }}
              sx={{ flexShrink: 0 }}
            >
              Add Next Item
            </Button>
          </section>
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
        </Paper>
      </div>
    </>
  );
};

export default AddDrawings;
