import {
  Box,
  Button,
  Card,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";
import TextFieldInput from "./TextFieldInput";
import { Fragment } from "react";
import Iconify from "../Iconify";

const DimensionsQC = ({ control }) => {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "attachments.quickCoupler",
  });

  const InputFormsQC = [
    {
      label: "퀵커플러(1)",
      name: "attachments.quick_coupler_1",
      type: "",
      unit: "",
    },
    {
      label: "커플러 중량",
      name: "attachments.quick_coupler_weight_1",
      type: "number",
      unit: "㎏",
    },
    {
      label: "퀵커플러(2)",
      name: "attachments.quick_coupler_2",
      type: "",
      unit: "",
    },
    {
      label: "커플러 중량",
      name: "attachments.quick_coupler_weight_2",
      type: "number",
      unit: "㎏",
    },
    {
      label: "높이 woQC",
      name: "overall_height_woQC",
      type: "number",
      unit: "㎜",
    },
    {
      label: "길이 woQC",
      name: "overall_length_woQC",
      type: "number",
      unit: "㎜",
    },
  ];

  const InputFormsWR = [
    {
      label: "최대굴착반경",
      name: "attachments.digging_reach",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대굴착반경 woQC",
      name: "attachments.digging_reach_woqc",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대굴착깊이",
      name: "attachments.digging_depth",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대굴착깊이 woQC",
      name: "attachments.digging_depth_woqc",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대덤프높이",
      name: "attachments.loading_height",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대덤프높이 woQC",
      name: "attachments.loading_height_woqc",
      type: "number",
      unit: "㎜",
    },
  ];

  return (
    <>
      <Card sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Fragment>
              <ul>
                {fields.map((item, index) => {
                  return (
                    <Fragment key={item.id}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-center"
                        
                      >
                        <Controller
                          render={({ field }) => (
                            <TextField
                              sx={{ width: "80%" }}
                              size="small"
                              {...field}
                            />
                          )}
                          name={`attachments.quickCoupler.${index}.model`}
                          defaultValue=""
                          control={control}
                        />
                        <Controller
                          render={({ field }) => (
                            <TextField
                              sx={{ width: "80%" }}
                              type={"number"}
                              size="small"
                              {...field}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">kg</InputAdornment>
                                ),
                              }}
                            />
                          )}
                          name={`attachments.quickCoupler.${index}.weight`}
                          defaultValue=""
                          control={control}
                        />
                        
                        <Button
                          size="small"
                          color="error"
                          startIcon={<Iconify icon="eva:trash-2-outline" />}
                          onClick={() => remove(index)}
                        />
                      </Stack>
                    </Fragment>
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
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "grid",
                // columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: "2fr 2fr ",
              }}
            >
              {InputFormsWR.map((fieldData) => (
                <TextFieldInput
                  key={fieldData.name}
                  fieldData={fieldData}
                  control={control}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default DimensionsQC;
