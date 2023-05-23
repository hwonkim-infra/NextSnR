import TextFieldInput from "@/components/KRTAForms/TextFieldInput";
import {
  Box,
  Card,
  Checkbox,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const NPDSummary = ({ control, values }) => {
  const InputForms = [
    { label: "기종명", name: "model_name" },
    { label: "일련번호", name: "serial_no", type: "number" },
    { label: "형식번호", name: "registration_no", type: "number" },
  ];



  return (
    <>
      <div className="input-group mb-1">
        <Grid container spacing={2}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: "grid",
                columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: "repeat(6, 1fr)",
              }}
            >
              {InputForms.map((fieldData) => (
                <TextFieldInput
                  fieldData={fieldData}
                  control={control}
                  key={fieldData.name}
                />
              ))}
            </Box>
            <Box>
              <h4>Target Market</h4>
              <Stack direction="row">
                <label>EU</label>
                <Controller
                  name="target.europeanUnion"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                    />
                  )}
                />
                  <label>북미</label>
                <Controller
                  name="target.northAmerica"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value}
                    />
                  )}
                />
                  <label>한국</label>
                <Controller
                  name="target.korea"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value || false}                      
                    />
                  )}
                />
              </Stack>
              {console.log(values.target?.korea)}
              {values.target?.korea && (
        <div>
          <label>한국형식승인</label>
          <input type="text"  />
        </div>
      )}
            </Box>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default NPDSummary;
