import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  Table,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import TextFieldInput from "./TextFieldInput";

const StabilityCOG = ({ control, values }) => {
  /* 전도정보입력 */
  const tippingCapaFields = [
    { label: "전도지선", name: "COG.tipping_line", type: "number", unit: "㎜" },
    {
      label: "최장굴착지점",
      name: "COG.bucket_COS",
      type: "number",
      unit: "㎜",
    },
  ];

  /* 축중정보입력 */
  const axleLoadFields = [
    {
      label: "무게중심(공차)",
      name: "undercarriage.COG_center_unload",
      type: "number",
      unit: "㎜",
    },
    {
      label: "무게중심(적재)",
      name: "undercarriage.COG_center_load",
      type: "number",
      unit: "㎜",
    },
    {
      label: "선회중심-전축 간 간격",
      name: "undercarriage.frontAxle_center",
      type: "number",
      unit: "㎜",
    },
  ];

  const rearAxle_center = Number(
    values.undercarriage.wheel_base - values.undercarriage.frontAxle_center
  );

  // Math.round(Number( (values.operating_weight * (rearAxle_center - Number(values.undercarriage.COG_center_unload))) / values.undercarriage.wheel_base )) || ""; // 공차하중 1축

  return (
    <>
      <Card sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "grid",
                // columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: "2fr 2fr",
              }}
            >
              {tippingCapaFields.map((fieldData) => (
                <TextFieldInput fieldData={fieldData} control={control} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "grid",
                // columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: "2fr 2fr ",
              }}
            >
              {axleLoadFields.map((fieldData) => (
                <TextFieldInput fieldData={fieldData} control={control} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default StabilityCOG;
