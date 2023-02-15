import { Box, Card, Grid, InputAdornment, Paper, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const PSCInput = ({ control }) => {
  const InputForms = [
    { label: "ITEM", name: "item", type: "" },
    { label: "Reference", name: "reference", type: "" },
    { label: "requirements", name: "requirements", type: "" },
    { label: "Compliance Statement", name: "complyStatements", type: "" },
  ];

  return (
    <>
      <div>
        <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={2}>
            <Card sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  columnGap: 2,
                  // rowGap: 2,
                  gridTemplateColumns: {
                    xs: "repeat(4, 1fr)",
                    sm: "repeat(4, 1fr)",
                  },
                }}
              >
         

                {InputForms.map((fieldData) => (
                  <Controller
                    key={fieldData.name}
                    render={({ field }) => (
                      <TextField label={fieldData.label} {...field}
                      InputLabelProps={{ shrink: true }}
                      value={field.value || ''}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {fieldData.unit}
                          </InputAdornment>
                        ),
                      }} />
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

export default PSCInput;
