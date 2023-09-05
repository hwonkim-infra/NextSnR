import { RHFcontrolSelect } from "@/components/hook-form/RHFcontrolSelect";
import {
  Autocomplete,
  Box,
  Card,
  Chip,
  Divider,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const GROUPS = [
  {
    label: "Engine",
    value: "engine",
  },
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Hydraulics",
    value: "hydraulics",
  },
  {
    label: "Structures",
    value: "structures",
  },
  {
    label: "Attachment",
    value: "attachment",
  },
  {
    label: "Cabin & Cowl",
    value: "cabin_cowl",
  },
  {
    label: "Undercarriage",
    value: "undercarriage",
  },
  {
    label: "Misellaneous",
    value: "misellaneous",
  },
];

const OPTIONS = [
  { value: "option 1", label: "Option 1" },
  { value: "option 2", label: "Option 2" },
  { value: "option 3", label: "Option 3" },
  { value: "option 4", label: "Option 4" },
  { value: "option 5", label: "Option 5" },
  { value: "option 6", label: "Option 6" },
  { value: "option 7", label: "Option 7" },
  { value: "option 8", label: "Option 8" },
];

const OptionPSCInputs = ({ control }) => {
  const InputForms = [
    { label: "옵션 이름 ", name: "optionName", type: "" },
    { label: "code", name: "code", type: "" },
    // { label: "requirements", name: "requirements", type: "" },
    // { label: "Compliance Statement", name: "complyStatements", type: "" },
  ];

  return (
    <>
      <Box
        sx={{
          display: "grid",
          columnGap: 2,
          rowGap: 2,
          gridTemplateColumns: "4fr 4fr",
        }}
      >
        {InputForms.map((fieldData) => (
          <Controller
            key={fieldData.name}
            render={({ field }) => (
              <TextField
                label={fieldData.label}
                {...field}
                InputLabelProps={{ shrink: true }}
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
      <Box
        sx={{
          display: "grid",
          columnGap: 2,
          rowGap: 2,
          gridTemplateColumns: "auto",
        }}
      >
        <Controller
          name="requirements"
          control={control}
          render={({ field }) => (
            <TextField
              multiline
              label="requirements"
              {...field}
              InputLabelProps={{ shrink: true }}
              value={field.value || ""}
            />
          )}
        />
        <RHFcontrolSelect
          name="group"
          label="Group"
          control={control}
        >
          <MenuItem value="">None</MenuItem>
          {GROUPS.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </RHFcontrolSelect>
        <Controller
          name="summary"
          control={control}
          render={({ field }) => (
            <TextField
              multiline
              label="Summary"
              {...field}
              InputLabelProps={{ shrink: true }}
              value={field.value || ""}
            />
          )}
        />
      </Box>
    </>
  );
};

export default OptionPSCInputs;
