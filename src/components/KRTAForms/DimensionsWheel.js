import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const DimensionsWheel = ({ control }) => {
  const formFieldsAxle = [
    {
      label: "축거",
      name: "undercarriage.wheel_base",
      type: "number",
      unit: "㎜",
    },
    {
      label: "전축 중심 간격",
      name: "undercarriage.frontAxle_center",
      type: "number",
      unit: "㎜",
    },
    {
      label: "윤거(전축)",
      name: "undercarriage.axle_track_front",
      type: "number",
      unit: "㎜",
    },
    {
      label: "윤거(후축)",
      name: "undercarriage.axle_track_rear",
      type: "number",
      unit: "㎜",
    },
    {
      label: "허용하중(전축)",
      name: "undercarriage.axle_weight_front_limit",
      type: "number",
      unit: "㎏",
    },
    {
      label: "허용하중(후축)",
      name: "undercarriage.axle_weight_rear_limit",
      type: "number",
      unit: "㎏",
    },
  ];

  

  const formFieldsTire = [
    {
      label: "타이어 전축",
      name: "undercarriage.tire_frontAxle",
      type: "number",
      unit: "",
    },
    {
      label: "타이어 후축",
      name: "undercarriage.tire_rearAxle",
      type: "number",
      unit: "",
    },
    {
      label: "허용하중(정지)",
      name: "undercarriage.tire_load_limit",
      type: "number",
      unit: "㎏",
    },
    {
      label: "허용하중(주행)",
      name: "undercarriage.tire_load_limit_running",
      type: "number",
      unit: "㎏",
    },
    {
      label: "타이어 갯수",
      name: "undercarriage.no_tires",
      type: "number",
      unit: "",
    },
  ];

  return (
    <>
     <Card sx={{ p: 3 }}>
        <Grid container spacing={2}>
            <Grid item xs={6}>

              <Box
                sx={{
                  display: "grid",
                  // columnGap: 2,
                  // rowGap: 2,
                  gridTemplateColumns: "2fr 2fr",
                }}
              >
                {formFieldsAxle.map((fieldData) => (
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
              </Box>
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
                {formFieldsTire.map((fieldData) => (
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
              </Box>
            </Grid>
          
        </Grid>
            </Card>
    </>
  );
};

export default DimensionsWheel;
