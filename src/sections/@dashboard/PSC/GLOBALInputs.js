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

const GLOBALInput = ({ control }) => {
  const InputForms = [
    { label: "emission", name: "properties.emission", type: "" },
    { label: "safety", name: "properties.safety", type: "" },
    { label: "typeApproval", name: "properties.typeApproval", type: "" },
    { label: "remarks", name: "properties.remarks", type: "" },
    { label: "numbers", name: "numbers", type: "number" },
    // { label: "requirements", name: "requirements", type: "" },
    // { label: "Compliance Statement", name: "complyStatements", type: "" },
  ];

  return (
    <>
      <div>
              <Box
                sx={{
                  display: "grid",
                  columnGap: 2,
                  rowGap: 2,
                gridTemplateColumns: '4fr 4fr',
                
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
              
      </div>
    </>
  );
};

export default GLOBALInput;
