import { Box, Button, Paper, Tab, Stack, TextField } from "@mui/material";
import React, {Fragment} from "react";

import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import Iconify from "@/components/Iconify";
import RHFSwitch from "@/components/hook-form/RHFSwitch";



const OptionDetaillInputs = ({control} ) => {

    const { fields, append, remove, prepend } = useFieldArray({ control, name: "items", });

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
                    render={({ field }) => <TextField size="small" sx={{width: "40%"}} {...field} label="code" />}
                    name={`items.${index}.Code`}
                    defaultValue=""
                    control={control}
                  />
                  <Controller
                    render={({ field }) => <TextField size="small" sx={{width: "60%"}} {...field} label="features" />}
                    name={`items.${index}.Features`}
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
            <RHFSwitch name={`items.${index}.region.EN`} label="EN" control={control} />
            <RHFSwitch name={`items.${index}.region.NA`} label="NA" control={control} />
            <RHFSwitch name={`items.${index}.region.KR`} label="KR" control={control} />
            <RHFSwitch name={`items.${index}.region.AUS`} label="AUS" control={control} />
            <RHFSwitch name={`items.${index}.region.CHN`} label="CHN" control={control} />
            <RHFSwitch name={`items.${index}.region.BRA`} label="BRA" control={control} />
            <RHFSwitch name={`items.${index}.region.CUTR`} label="CUTR" control={control} />

                  <Controller
                    control={control}
                    defaultValue=""
                    name={`items.${index}.description`}
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

export default OptionDetaillInputs;
