import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const TravelWX = ({control}) => {
  
  const formFieldsSpeed = [
    { label: "주행 펌프 용량", name: "travel.pump_displacement_travel", type: "number", unit: "l/min", },
    { label: "주행 모터 용적", name: "travel.motor_displacement_travel", type: "number", unit: "㏄/rev", },
    { label: "주행 모터 효율", name: "travel.motor_eff_travel", type: "number", unit: "", min:"0", max:"1",},
    { label: "감속비: 미션", name: "travel.TM_reduction", type: "number", unit: "", },
    { label: "감속비: 액슬", name: "travel.axle_reduction", type: "number", unit: "", },    
    { label: "타이어 동하중 반경", name: "travel.tire_rolling_radius", type: "number", unit: "㎜", },
  ];

  const formFieldsTravelRadius = [
    { label: "킹핀 간격", name: "travel.kingpin_gap", type: "number", unit: "㎜", },
    { label: "킹핀 - 타이어 간격", name: "travel.kingpin_offset", type: "number", unit: "㎜", },
    { label: "외륜최대조향각", name: "travel.wheel_angle", type: "number", unit: "", },
    
  ];

  const formFieldsTravelSlope = [
    { label: "견인력", name: "travel.traction_force", type: "number", unit: "Nm", },
    { label: "브레이크 토크", name: "travel.brake_torque_axle", type: "number", unit: "㎏f", },
    { label: "지면마찰계수", name: "travel.friction_surface", type: "number", unit: "", },
    { label: "주행저항계수", name: "travel.running_resist", type: "number", unit: "", },
    { label: "기준등판각도", name: "travel.engine_slope", type: "number", unit: "", },
    
  ];

  const manualFieldsTravel = [
    { label: "주행속도 (직접입력)", name: "travel.travel_speed", type: "number", unit: "km/hr", },
    
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
                {formFieldsSpeed.map((fieldData) => (
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
                {formFieldsTravelSlope.map((fieldData) => (
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
                {formFieldsTravelRadius.map((fieldData) => (
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
                {manualFieldsTravel.map((fieldData) => (
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

export default TravelWX;
