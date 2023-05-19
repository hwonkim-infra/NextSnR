import {
  Box,
  Card,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

import React from "react";
import TextFieldInput from "@/components/KRTAForms/TextFieldInput";

const NPDPCRform = ({ control }) => {
  const NPD_Access = [
    { label: "Step/Platform", name: "npdStage.step_platform" },
    { label: "Handrail", name: "handrail" },
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
                {NPD_Access.map((fieldData) => (
                  <>
                    <h2>{fieldData.label}</h2>
                    <Controller
                      render={({ field }) => (
                        <RadioGroup aria-label="gender" {...field}>
                          <FormControlLabel
                            value="green"
                            control={<Radio color="success" />}
                            label="Green"
                          />
                          <FormControlLabel
                            value="yellow"
                            control={<Radio color="warning" />}
                            label="Yellow"
                          />
                          <FormControlLabel
                            value="red"
                            control={<Radio color="error" />}
                            label="Red"
                          />
                        </RadioGroup>
                      )}
                      name="npdStage.pcr.state"
                      control={control}
                    />

<Controller
                      render={({ field }) => (
                        <TextField
                          sx={{ width: "100%" }}
                          label={"description"}
                          {...field}
                          InputLabelProps={{ shrink: true }}
                          value={field.value || ""}
                          />
                          )}
                          name={"npdStage.pcr.description"}
                      control={control}
                    />
                    {/* <TextFieldInput fieldData={fieldData} control={control} /> */}

                    
                  </>
                ))}
              </Box>
            </Card>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default NPDPCRform;
