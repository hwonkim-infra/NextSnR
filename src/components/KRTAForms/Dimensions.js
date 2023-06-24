import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import TextFieldInput from "./TextFieldInput";

const Dimensions = ({ control }) => {
  const InputForms = [
    { label: "길이", name: "overall_length", type: "number", unit: "㎜" },
    { label: "너비", name: "overall_width", type: "number", unit: "㎜" },
    { label: "높이", name: "overall_height", type: "number", unit: "㎜" },
    {
      label: "최저지상고",
      name: "undercarriage.ground_clearance",
      type: "number",
      unit: "㎜",
    },
    {
      label: "후방선회반경",
      name: "rear_swing_radius",
      type: "number",
      unit: "㎜",
    },
    {
      label: "배토판너비x높이",
      name: "undercarriage.dozer_size",
      type: "",
      unit: "㎜x㎜",
    },
  ];

  return (
    <>
      <div className="input-group mb-1">
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Card sx={{ p: 1 }}>
              <Box
                sx={{
                  display: "grid",
                  columnGap: 2,
                  // rowGap: 2,
                  gridTemplateColumns: {
                    xs: "repeat(4, 1fr)",
                    sm: "repeat(6, 1fr)",
                  },
                }}
              >
                {InputForms.map((fieldData) => (
                  <TextFieldInput key={fieldData.name} fieldData={fieldData} control={control} />
                ))}
              </Box>
            </Card>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Dimensions;
