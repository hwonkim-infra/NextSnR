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

const EngineFields = ({ control }) => {
  const InputForms = [
    { label: "엔진형식", name: "engine.engine_name", type: "", unit: "" },
    { label: "엔진제작사", name: "engine.supplier", type: "", unit: "" },
    { label: "출력(정격)", name: "engine.power", type: "number", unit: "ps" },
    { label: "", name: "engine.nominal_rev", type: "number", unit: "rpm" },
    { label: "최대 토크", name: "engine.torque", type: "number", unit: "kgf m", },
    { label: "", name: "engine.torque_rev", type: "number", unit: "rpm" },
    { label: "", name: "engine.cylinder", type: "number", unit: "기통" },
  ];

  return (
    <>
      <div className="input-group mb-1">
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Card sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  // columnGap: 2,
                  // rowGap: 2,
                  gridTemplateColumns: "2fr 2fr",
                  // gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(4, 1fr)' },
                }}
              >
                {InputForms.map((fieldData) => (
                  <TextFieldInput fieldData={fieldData} control={control} />
                ))}
              </Box>
            </Card>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default EngineFields;
