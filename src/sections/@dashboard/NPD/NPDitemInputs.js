import {
  Autocomplete,
  Box,
  Chip,
  InputAdornment,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { NPDtargetMarkets } from "./NPDtargetMarkets";

// const Markets_Option = ["MD", "EU", "NA", "China", "Korea"];
const Markets_Option = NPDtargetMarkets.filter((item) => item !== "All");

const NPDitemInput = ({ control }) => {
  const [status, setStatus] = useState("struc");

  const InputForms = [
    { label: "Item name", name: "itemName", type: "" },
    { label: "Label", name: "label", type: "" },
    { label: "Reference", name: "reference", type: "" },
    // { label: "requirements", name: "requirements", type: "" },
    // { label: "Compliance Statement", name: "complyStatements", type: "" },
  ];

  const handleClose = () => {
    setOpen(null);
  };

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
{/* 
<Controller
              render={({ field }) => (
                <Select {...field}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              )}
              name="Select"
              control={control}
            /> */}

        <Controller
          name="markets"
          control={control}
          render={({ field }) => (
            <>
              <Autocomplete
                multiple
                freeSolo
                onChange={(event, newValue) => field.onChange(newValue)}
                options={Markets_Option.map((option) => option)}
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
                  <TextField label="target Markets" {...params} />
                )}
              />
            </>
          )}
        />
      </Box>
    </>
  );
};

export default NPDitemInput;
