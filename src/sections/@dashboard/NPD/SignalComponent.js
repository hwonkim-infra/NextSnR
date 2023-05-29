import {
  Box,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { Fragment } from "react";
import { Controller } from "react-hook-form";

const SignalComponent = ({ group, groupItems, NPDStage, control }) => {
  return (
    <Paper variant="outlined" sx={{ p: 3, width: "100%" }}>
      <h3>{group}</h3>
      <Box sx={{ p: 2 }}>
        {groupItems.map((fieldData) => (
          <Fragment key={fieldData.name}>
            <h4>{fieldData.label}</h4>
            <Box sx={{ p: 3 }}>
              <Controller
                render={({ field }) => (
                  <RadioGroup
                    aria-label="signal"
                    {...field}
                    value={field.value || "white"}

                  >
                    <Stack direction="row">
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
                      <FormControlLabel
                        value="white"
                        control={<Radio color="default" />}
                        label="White"
                      />
                    </Stack>
                  </RadioGroup>
                )}
                name={`npdStage.${NPDStage}.${group}.${fieldData.name}.state`}
                control={control}
              />

              <Controller
                render={({ field }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    label={"description"}
                    {...field}
                    fullWidth
                    size="small"
                    variant="standard"
                    // helperText="Check Result"
                    value={field.value || ""}
                  />
                )}
                name={`npdStage.${NPDStage}.${fieldData.name}.description`}
                control={control}
              />
            </Box>
          </Fragment>
        ))}
      </Box>
    </Paper>
  );
};

export default SignalComponent;
