import TextFieldInput from "@/components/KRTAForms/TextFieldInput";
import {
    Box,
    Card,
    Grid,
    InputAdornment,
    Paper,
    TextField,
  } from "@mui/material";
  import { Controller } from "react-hook-form";
  
  const NPDSummary = ({ control }) => {
    const InputForms = [
      { label: "기종명", name: "model_name" },
      { label: "일련번호", name: "serial_no", type: "number" },
      { label: "형식번호", name: "registration_no", type: "number" },
      
    ];
  
    return (
      <>
        <div className="input-group mb-1">
          <Grid container spacing={2}>
            <Card sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  columnGap: 2,
                  // rowGap: 2,
                  gridTemplateColumns: "repeat(6, 1fr)",
                }}
              >
                {InputForms.map((fieldData) => (
                  <TextFieldInput fieldData={fieldData} control={control} />
                ))}
              </Box>
              <Box>
                <Controller
                  render={({ field }) => (
                    <TextField
                      sx={{ width: "100%" }}
                      label={"주요 형식변경"}
                      {...field}
                      InputLabelProps={{ shrink: true }}
                      value={field.value || ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"></InputAdornment>
                        ),
                      }}
                    />
                  )}
                  name={"ECN"}
                  type={"string"}
                  control={control}
                />
              </Box>
            </Card>
          </Grid>
        </div>
      </>
    );
  };
  
  export default NPDSummary;
  