import { Box, Button, Paper, Tab, Stack, TextField } from "@mui/material";
import React, { Fragment } from "react";

import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import Iconify from "@/components/Iconify";

const NoiseCertiModelInputs = ({ control }) => {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "models",
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
                sx={{}}
              >
                <Controller
                  render={({ field }) => (
                    <TextField
                      label="기종명"
                      sx={{ width: "20%" }}
                      {...field}
                    />
                  )}
                  name={`models.${index}.model_name`}
                  defaultValue=""
                  control={control}
                />

                <Controller
                  render={({ field }) => (
                    <TextField
                      label="Measured"
                      sx={{ width: "10%" }}
                      {...field}
                    />
                  )}
                  name={`models.${index}.Noise_Measured`}
                  defaultValue=""
                  control={control}
                />

                <Controller
                  render={({ field }) => (
                    <TextField
                      label="Guaranteed"
                      sx={{ width: "10%" }}
                      {...field}
                    />
                  )}
                  name={`models.${index}.Noise_Guaranteed`}
                  defaultValue=""
                  control={control}
                />

                <Controller
                  render={({ field }) => (
                    <TextField label="Limit" sx={{ width: "10%" }} {...field} />
                  )}
                  name={`models.${index}.Noise_Limit`}
                  defaultValue=""
                  control={control}
                />

                <Controller
                  render={({ field }) => (
                    <TextField
                      label="Technical Document"
                      sx={{ width: "30%" }}
                      {...field}
                    />
                  )}
                  name={`models.${index}.TechnicalDoc`}
                  defaultValue=""
                  control={control}
                />

<Controller
                  render={({ field }) => (
                    <TextField
                      label="Rated Power"
                      sx={{ width: "10%" }}
                      {...field}
                    />
                  )}
                  name={`models.${index}.Rated_Power`}
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
          Add Previous Model
        </Button>
        <Button
          size="small"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            append({});
          }}
          sx={{ flexShrink: 0 }}
        >
          Add Next Model
        </Button>
      </section>
    </Fragment>
  );
};

export default NoiseCertiModelInputs;
