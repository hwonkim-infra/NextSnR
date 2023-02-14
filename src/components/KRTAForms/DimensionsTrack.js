import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const DimensionsTrack = ({ control }) => {
const InputForms = [
    { label: "슈폭", name: "undercarriage.shoe_width", type: "number", unit: "㎜" },
    { label: "트랙길이", name: "undercarriage.track_length", type: "number", unit: "㎜" },
    { label: "트랙높이", name: "undercarriage.track_height", type: "number", unit: "㎜" },
    { label: "트랙중심간거리", name: "undercarriage.track_gap", type: "number", unit: "㎜" },
    { label: "텀블러간격", name: "undercarriage.tumbler_distance", type: "number", unit: "㎜" },
  ];



  return (
    <>

<div className="input-group mb-1">
        <Paper style={{ padding: 4 }}>
          <Grid container alignItems="flex-start" spacing={2}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                // columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: 'repeat(5, 1fr)',
                // gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(4, 1fr)' },
              }}
            >
      {InputForms.map((fieldData) => (
                  <Controller
                    key={fieldData.name}
                    render={({ field }) => (
                      <TextField
                        label={fieldData.label}
                        {...field}
                      value={field.value || ''}
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

export default DimensionsTrack;
