import { Box, Card, Grid, InputAdornment, Paper, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const Summary = ({ control,  }) => {
  const InputForms = [
    { label: "기종명", name: "model_name" },
    { label: "일련번호", name: "serial_no", type: "number" },
    { label: "형식번호", name: "registration_no", type: "number" },
    { label: "변속기", name: "gearbox", type: "" },
    { label: "자체중량", name: "operating_weight", type: "number", unit: "㎏" },
    { label: "규격", name: "machine_grade" },
    { label: "붐", name: "attachments.boom_length", type: "number", unit: "㎜" },
    { label: "암", name: "attachments.arm_length", type: "number", unit: "㎜" },
    {
      label: "버켓 용량(평적)",
      name: "attachments.bucket_struck",
      type: "number", unit: "㎥"
    },
    {
      label: "버켓 용량(산적)",
      name: "attachments.bucket_heap",
      type: "number", unit: "㎥"
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

export default Summary;
