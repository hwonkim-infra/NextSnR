import { Box, Button, Paper, Tab, Tabs, TextField } from "@mui/material";
import React from "react";

import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import Iconify from "@/components/Iconify";



const PSCdetailInput = ({control} ) => {

    const { fields, append, remove, prepend } = useFieldArray({
        control,
        name: "appendix",
      });

  return (
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
  );
};

export default PSCdetailInput;
