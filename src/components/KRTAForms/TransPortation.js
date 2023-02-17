import {
  Box,
  Button,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import Iconify from "@/components/Iconify";
import { Controller, useFieldArray } from "react-hook-form";

const TransPortation = ({ control }) => {
  const InputForms = [
    {
      label: "분해수송 (2)",
      name: "transport.transport_2",
      type: "",
      unit: "",
    },
    {
      label: "분해수송 높이",
      name: "transport.transport_2_height",
      type: "number",
      unit: "m",
    },
    {
      label: "분해수송 중량",
      name: "transport.transport_2_weight",
      type: "number",
      unit: "㎏",
    },
    {
      label: "분해수송 (3)",
      name: "transport.transport_3",
      type: "",
      unit: "",
    },
    {
      label: "분해수송 높이",
      name: "transport.transport_3_height",
      type: "number",
      unit: "m",
    },
    {
      label: "분해수송 중량",
      name: "transport.transport_3_weight",
      type: "number",
      unit: "㎏",
    },
    {
      label: "분해수송 (4)",
      name: "transport.transport_4",
      type: "",
      unit: "",
    },
    {
      label: "분해수송 높이",
      name: "transport.transport_4_height",
      type: "number",
      unit: "m",
    },
    {
      label: "분해수송 중량",
      name: "transport.transport_4_weight",
      type: "number",
      unit: "㎏",
    },
    {
      label: "분해수송 (5)",
      name: "transport.transport_5",
      type: "",
      unit: "",
    },
    {
      label: "분해수송 높이",
      name: "transport.transport_5_height",
      type: "number",
      unit: "m",
    },
    {
      label: "분해수송 중량",
      name: "transport.transport_5_weight",
      type: "number",
      unit: "㎏",
    },
  ];

  return (
    <>
      <div className="input-group mb-1">
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Card sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  columnGap: 2,
                  // rowGap: 2,
                  gridTemplateColumns: "4fr 1fr 1fr",
                }}
              >
                <Controller
                  name="transport.transport_1"
                  control={control}
                  render={({ field }) => (
                    <TextField
                    placeholder="본체"
                      label="분해수송 (1)"
                      {...field}
                      value={field.value || ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"></InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Controller
                  name="transport.transport_1_height"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="분해수송 높이"
                      {...field}
                      value={field.value || ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">m</InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Controller
                  name="transport.transport_1_weight"
                  control={control}
                  render={({ field }) => (
                    <TextField
                    disabled
                      // label="분해수송 중량"
                      {...field}
                      value={field.value || ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">㎏</InputAdornment>
                        ),
                      }}
                    />
                  )}
                />

                {InputForms.map((fieldData) => (
                  <Controller
                    key={fieldData.name}
                    render={({ field }) => (
                      <TextField
                        label={fieldData.label}
                        {...field}
                        value={field.value || ""}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {fieldData.unit}
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    name={fieldData.name}
                    type={fieldData.type}
                    control={control}
                  />
                ))}
                {/* 
<ul>
            {fields.map((item, index) => {
              return (

<li key={item.id}>
            <Controller
              render={({ field }) => <TextField {...field} />}
              name={`transport.transport_${index}`}
              defaultValue=""
              control={control}
            />
            <Controller
              render={({ field }) => <TextField {...field} />}
              name={`transport.transport_${index}_height`}
              defaultValue=""
              control={control}
            />
            <Controller
              render={({ field }) => <TextField {...field} />}
              name={`transport.transport_${index}_weight`}
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
          </li>);
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

          </section> */}
              </Box>
            </Card>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default TransPortation;
