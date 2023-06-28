import { Box, Card, Grid, Paper } from "@mui/material";
import TextFieldInput from "./TextFieldInput";

export default function TravelDZ({ control }) {
  const travelSpeedForms = [
    {
      label: "주행펌프(Q_Pump)",
      name: "travel.Q_Pump",
      type: "number",
      unit: "rpm",
    },
    {
      label: "주행모터 용적(q_Motor)",
      name: "travel.q_Motor",
      type: "number",
      unit: "cc/rev",
    },
    { label: "기어비(Gear_Ratio)", name: "travel.Gear_Ratio", type: "number", unit: "" },
    {
      label: "스프로켓 PCD",
      name: "travel.Sprocket_Radius",
      type: "number",
      unit: "㎜",
    },
    {
      label: "주행효율(vol_eff,η)",
      name: "travel.vol_eff",
      type: "number",
      unit: "㎜",
    },
  ];

  const greadabilityForms = [
    // 출력토크
    {
      label: "견인펌프(P_Pump)",
      name: "travel.P_Pump",
      type: "number",
      unit: "rpm",
    },
    {
      label: "견인모터(T_Motor)",
      name: "travel.q_Motor_T",
      type: "number",
      unit: "cc/rev",
    },
    {
      label: "견인모터효율(Gear_eff,η)",
      name: "travel.Gear_eff",
      type: "number",
      unit: "",
    },
    {
      label: "기계효율(Mech_eff)",
      name: "travel.Mech_eff",
      type: "number",
      unit: "",
    },
    // 구동력
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
