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

const DimensionsQC = ({ control }) => {
  const InputFormsQC = [
    {
      label: "퀵커플러(1)",
      name: "attachments.quick_coupler_1",
      type: "",
      unit: "",
    },
    {
      label: "커플러 중량",
      name: "attachments.quick_coupler_weight_1",
      type: "number",
      unit: "㎏",
    },
    {
      label: "퀵커플러(2)",
      name: "attachments.quick_coupler_2",
      type: "",
      unit: "",
    },
    {
      label: "커플러 중량",
      name: "attachments.quick_coupler_weight_2",
      type: "number",
      unit: "㎏",
    },
    {
      label: "높이 woQC",
      name: "overall_height_woQC",
      type: "number",
      unit: "㎜",
    },
    {
      label: "길이 woQC",
      name: "overall_length_woQC",
      type: "number",
      unit: "㎜",
    },
  ];

  const InputFormsWR = [
    {
      label: "최대굴착반경",
      name: "attachments.digging_reach",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대굴착반경 woQC",
      name: "attachments.digging_reach_woqc",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대굴착깊이",
      name: "attachments.digging_depth",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대굴착깊이 woQC",
      name: "attachments.digging_depth_woqc",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대덤프높이",
      name: "attachments.loading_height",
      type: "number",
      unit: "㎜",
    },
    {
      label: "최대덤프높이 woQC",
      name: "attachments.loading_height_woqc",
      type: "number",
      unit: "㎜",
    },
  ];

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
              {InputFormsQC.map((fieldData) => (
                <TextFieldInput key={fieldData.name} fieldData={fieldData} control={control} />
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
              {InputFormsWR.map((fieldData) => (
                <TextFieldInput key={fieldData.name} fieldData={fieldData} control={control} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default DimensionsQC;
