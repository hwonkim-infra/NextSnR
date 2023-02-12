import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const Swivel = ({ control }) => {

  const InputForms = [
    { label: "선회펌프 유량", name: "swivel.pump_flow", type: "number", unit: "l/min" },
    { label: "선회모터 용적", name: "swivel.motor_displacement", type: "number", unit: "cc/rev" },
    { label: "선회 감속비", name: "swivel.reduction", type: "number", unit: "" },
    { label: "선회모터 용적 효율", name: "swivel.motor_eff", type: "number", unit: "" },    
  ];
  return (
    <>
      
      <div className="input-group mb-1">
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(4, 1fr)' },
              }}
            >
               {InputForms.map((fieldData) => (
                  <Controller
                    key={fieldData.name}
                    render={({ field }) => (
                      <TextField
                        label={fieldData.label}
                        {...field}
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

            
          </Card>
          </Grid>
        </Paper>

      </div>

    </>
  );
};

export default Swivel;
