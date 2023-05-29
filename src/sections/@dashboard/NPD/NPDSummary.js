import CheckboxMUIInput from "@/components/CheckboxMUIInput";
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

  const TargetMarketForms = [
    // { label: "EU", name: "targetMarket.europeanUnion" },
    { label: "북미", name: "targetMarket.northAmerica" },
    { label: "한국", name: "targetMarket.korea" },
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
                  name="targetMarket.europeanUnion"
                  control={control}
                  render={({ field }) => <Checkbox {...field} />}
                />
               
                {/*  <label>한국</label>
                <Controller
                  name="targetMarket.korea"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={field.value || false}
                    />
                  )}
                /> */}

                {TargetMarketForms.map((fieldData) => (
                  <CheckboxMUIInput
                    label={fieldData.label}
                    fieldData={fieldData}
                    control={control}
                    key={fieldData.name}
                  />
                ))}
              </Stack>
              {values.target?.korea && (
                <div>
                  <label>한국형식승인</label>
                  <input type="text" />
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
