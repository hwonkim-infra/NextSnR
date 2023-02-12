import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const DimensionsQC = ({ control }) => {
  const InputForms = [
    { label: "퀵커플러(1)", name: "attachments.quick_coupler_1", type: "number", unit: "" },
    { label: "커플러 중량", name: "attachments.quick_coupler_weight_1", type: "number", unit: "㎏" },
    { label: "퀵커플러(2)", name: "attachments.quick_coupler_2", type: "number", unit: "" },
    { label: "커플러 중량", name: "attachments.quick_coupler_weight_2", type: "number", unit: "㎏" },
    { label: "높이 woQC", name: "overall_height_woQC", type: "number", unit: "㎜" },
    { label: "길이 woQC", name: "overall_length_woQC", type: "number", unit: "㎜" },
    { label: "최대굴착반경", name: "attachments.digging_reach", type: "number", unit: "㎜" },
    { label: "최대굴착반경 woQC", name: "attachments.digging_reach_woqc", type: "number", unit: "㎜" },
    { label: "최대굴착깊이", name: "attachments.digging_depth", type: "number", unit: "㎜" },
    { label: "최대굴착깊이 woQC", name: "attachments.digging_depth_woqc", type: "number", unit: "㎜" },
    { label: "최대덤프높이", name: "attachments.loading_height", type: "number", unit: "㎜" },
    { label: "최대덤프높이 woQC", name: "attachments.loading_height_woqc", type: "number", unit: "㎜" },
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

export default DimensionsQC;
