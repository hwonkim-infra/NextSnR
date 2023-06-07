import {
  Box,
  CircularProgress,
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

const SignalFormComponent = ({
  group,
  NPDStage,
  control,
  currentNPD,
  groupName,
  groupItems,
}) => {
  if (!groupItems) return <CircularProgress />;

  return (
    <Paper variant="outlined" sx={{ p: 3, width: "100%" }}>
      <h3>{"Access"}</h3>
      <Box sx={{ p: 2 }}>
        {groupItems.slice(0,3).map((fieldData, index) => (
          <Fragment key={fieldData.name}>
            <h4>{fieldData.label}</h4>
      <Box sx={{ p: 2 }}>
            <Controller
              name={`npdStage.${NPDStage}[${index}].state`}
              // name={fieldData.state}
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
              // name={`npdStage.${NPDStage}.${group}.${fieldData.name}.state`}
              // name={`npdStage.${NPDStage}.${group}.${fieldData}.state`}
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
              name={`npdStage.${NPDStage}[${index}].description`}
              control={control}
            />
      </Box>
          </Fragment>
        ))}
      </Box>
      <h3>{"Structure"}</h3>
      <Box sx={{ p: 2 }}>
        {groupItems.slice(4,9).map((fieldData, index) => (
          <Fragment key={fieldData.name}>
            <h4>{fieldData.label}</h4>
      <Box sx={{ p: 2 }}>
            <Controller
              name={`npdStage.${NPDStage}[${index}].state`}
              // name={fieldData.state}
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
              // name={`npdStage.${NPDStage}.${group}.${fieldData.name}.state`}
              // name={`npdStage.${NPDStage}.${group}.${fieldData}.state`}
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
              name={`npdStage.${NPDStage}[${index}].description`}
              control={control}
            />
      </Box>
          </Fragment>
        ))}
      </Box>
    </Paper>
  );
};

export default SignalFormComponent;
