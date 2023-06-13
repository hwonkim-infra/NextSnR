import { Box, Card, Grid, Paper } from "@mui/material";
import TextFieldInput from "./TextFieldInput";

export default function TravelDZ({ control }) {
  const travelSpeedForms = [
    {
      label: "엔진 회전수(ne)",
      name: "travel.engine_rev",
      type: "number",
      unit: "rpm",
    },
    {
      label: "주행모터 용적(qm)",
      name: "travel.TM_flow_1",
      type: "number",
      unit: "cc/rev",
    },
    { label: "주행 감속비(i)", name: "travel.reduc", type: "number", unit: "" },
    { label: "No.Teeth(z)", name: "travel.teeth", type: "number", unit: "" },
    {
      label: "Link Pitch(z)",
      name: "travel.pitch",
      type: "number",
      unit: "㎜",
    },
    {
      label: "주행모터 속도(nm)",
      name: "travel.TM_rpm",
      type: "number",
      unit: "rpm",
    },
    
    { label: "주행 효율(η)", name: "travel.drag", type: "number", unit: "" },
  ];

  const greadabilityForms = [
    // 출력토크
    {
      label: "주행펌프 압력",
      name: "travel.pump_pressure",
      type: "number",
      unit: "(P, bar)",
    },
    {
      label: "주행모터 용량",
      name: "travel.TM_flow_q",
      type: "number",
      unit: "cc/rev",
    },
    {
      label: "주행모터 효율(η)",
      name: "travel.TM_mt",
      type: "number",
      unit: "",
    },
    // 구동력
    { label: "감속비(i)", name: "travel.reduc_trac", type: "number", unit: "" },
    {
      label: "스프로켓 PCD",
      name: "travel.sprocket_PCD",
      type: "number",
      unit: "㎜",
    },
    {
      label: "구동 효율(η)",
      name: "travel.eff_trac",
      type: "number",
      unit: "",
    },
    // 등판능력 계산
    {
      label: "주행저항계수(P)",
      name: "travel.travel_drag",
      type: "number",
      unit: "",
    },
    
  ];

  return (
    <>
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={2}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: "grid",
                columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: { sm: "repeat(4, 1fr)" },
              }}
            >
              {travelSpeedForms.map((fieldData) => (
                <TextFieldInput
                  key={fieldData.name}
                  fieldData={fieldData}
                  control={control}
                />
              ))}
            </Box>
          </Card>
            <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: "grid",
                columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: { sm: "repeat(4, 1fr)" },
              }}
            >
              {greadabilityForms.map((fieldData) => (
                <TextFieldInput
                  key={fieldData.name}
                  fieldData={fieldData}
                  control={control}
                />
              ))}
            </Box>
          </Card>
        </Grid>
      </Paper>
    </>
  );
}
