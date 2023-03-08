import { Box, Button, Paper, Tab, Stack, TextField } from "@mui/material";
import React, {Fragment} from "react";

import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import Iconify from "@/components/Iconify";



const PSCdetailInput = ({control} ) => {

    const { fields, append, remove, prepend } = useFieldArray({
        control,
        name: "actions",
      });

  return (
    <Fragment>
      
          <ul>
            {fields.map((item, index) => {
              return (
                <li key={item.id}>
                  <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-center"
                sx={{ mt: 3 }}
              >

                  <Controller
                    render={({ field }) => <TextField sx={{width: "80%"}} {...field} />}
                    name={`actions.${index}.subItem`}
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
                    </Stack>
                  <Controller
                    control={control}
                    defaultValue=""
                    name={`actions.${index}.subAction`}
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
        </Fragment>
  );
};

export default PSCdetailInput;
