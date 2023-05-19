import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const TextFieldInput = ({ fieldData, control }) => {
  return (
    <Controller
      key={fieldData.name}
      render={({ field }) => (
        <TextField
          label={fieldData.label}
          type={fieldData.type}
          {...field}
          value={field.value || ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">{fieldData.unit}</InputAdornment>
            ),
          }}
        />
      )}
      name={fieldData.name}
      control={control}
    />
  );
};

export default TextFieldInput;
