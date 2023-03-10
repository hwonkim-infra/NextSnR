import {
  Autocomplete,
  Box,
  Card,
  Chip,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const TAGS_OPTION = ["MD", "EU", "NA", "China", "Korea"];

const PSCInput = ({ control }) => {
  const InputForms = [
    { label: "ITEM", name: "item", type: "" },
    { label: "Reference", name: "reference", type: "" },
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

        <Controller
          name="complyStatements"
          control={control}
          render={({ field }) => (
            <TextField
              multiline
              label="Compliance Statement"
              {...field}
              InputLabelProps={{ shrink: true }}
              value={field.value || ""}
            />
          )}
        />

        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <>
              <Autocomplete
                multiple
                freeSolo
                onChange={(event, newValue) => field.onChange(newValue)}
                options={TAGS_OPTION.map((option) => option)}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      size="small"
                      label={option}
                    />
                  ))
                }
                renderInput={(params, field) => (
                  <TextField label="Tags" {...params} />
                )}
              />
            </>
          )}
        />
      </Box>
    </>
  );
};

export default PSCInput;
