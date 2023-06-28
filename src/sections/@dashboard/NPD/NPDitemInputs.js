import {
  Autocomplete,
  Box,
  Chip,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { NPDtargetMarkets } from "./NPDtargetMarkets";

// const Markets_Option = ["MD", "EU", "NA", "China", "Korea"];
const Markets_Option = NPDtargetMarkets.filter((item) => item !== "All");
const Groups = [
  "access",
  "structure",
  "operatorStation",
  "powerTrain",
  "electric",
  "hydraulics",
  "certification",
  "brake",
  "steering",
  "protective",
  "HVAC",
  "objectHandling",
  "electric",
  "engineEmission",
  "noiseVibration",
];

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
      <Box>
        <Stack direction="row">
          <Box sx={{p:1}} label="Stage">

          <Controller
            name={`npdStage`}
            label="Stage"
            render={({ field }) => (
              <Select label="Stage" defaultValue={field.npdStage}   {...field} sx={{ minWidth: 200 }}>
                <MenuItem value={"FDR"}>FDR</MenuItem>
                <MenuItem value={"DVC"}>DVC</MenuItem>
                <MenuItem value={"PVC"}>PVC</MenuItem>
              </Select>
            )}
            control={control}
            />
            </Box>
            <Box sx={{p:1}} >

          <Controller
            render={({ field }) => (
              <Select {...field} sx={{ minWidth: 200 }}>
                {Groups.map((group) => (
                  <MenuItem key={group} value={group}>
                    {group}
                  </MenuItem>
                ))}
              </Select>
            )}
            name="group"
            control={control}
          />

            </Box>
            <Box sx={{p:1}} >
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
                  <TextField  sx={{ minWidth: 300 }} label="target Markets" {...params} />
                )}
              />
            </>
          )}
        />
            </Box>
        </Stack>
      </Box>
    </>
  );
};

export default NPDitemInput;
