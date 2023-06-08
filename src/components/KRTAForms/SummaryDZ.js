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

const SummaryDZ = ({ control }) => {
  const InputForms = [
    { label: "기종명", name: "model_name" },
    { label: "일련번호", name: "serial_no", type: "number" },
    { label: "형식번호", name: "registration_no", type: "" },
    { label: "변속기", name: "gearbox", type: "" },
    { label: "자체중량", name: "operating_weight", type: "number", unit: "㎏" },
    { label: "규격", name: "machine_grade" },
    { label: "배토판 너비", name: "attachments.dozer_width", type: "number", unit: "㎜", },
     { label: "배토판 높이", name: "attachments.dozer_height", type: "number", unit: "㎜", },
     { label: "틸트량", name: "attachments.dozer_tilt", type: "number", unit: "㎜", },
     { label: "앵글량", name: "attachments.dozer_angle", type: "number", unit: "°", },
      { label: "카운터웨이트", name: "COG.counterWeight_weight", type: "number", unit: "㎏", },
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
                  key={fieldData.name}
                  fieldData={fieldData}
                  control={control}
                />
              ))}
            </Box>
            <Box>
              <Controller
                render={({ field }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    label={"주요 형식변경"}
                    {...field}
                    InputLabelProps={{ shrink: true }}
                    value={field.value || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end"></InputAdornment>
                      ),
                    }}
                  />
                )}
                name={"ECN"}
                type={"string"}
                control={control}
              />
            </Box>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default SummaryDZ;
