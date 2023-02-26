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
import TinyEditor from "../KRTA/TinyEditor";

const TAGS_OPTION = ["MD", "EU", "NA", "China", "Korea"];

const GLOBALInput = ({ control }) => {
  const InputForms = [
    { label: "emission", name: "properties.emission", type: "" },
    { label: "noise", name: "properties.noise", type: "" },
    { label: "safety", name: "properties.safety", type: "" },
    { label: "typeApproval", name: "properties.typeApproval", type: "" },
    // { label: "remarks", name: "properties.remarks", type: "" },
    
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
                      multiline
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
              <Controller
                    control={control}
                    defaultValue=""
                    name="properties.remarks"
                    render={({ field: { onChange, value } }) => (
                      <>
                        <TinyEditor onChange={onChange} value={value} />
                      </>
                    )}
                  />
              
      </div>
    </>
  );
};

export default GLOBALInput;
