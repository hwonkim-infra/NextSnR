import {
  Box,
  Card,
  Grid
} from "@mui/material";

const DimensionsTrack = ({ control }) => {
  const InputForms = [
    {
      label: "슈폭",
      name: "undercarriage.shoe_width",
      type: "number",
      unit: "㎜",
    },
    {
      label: "트랙길이",
      name: "undercarriage.track_length",
      type: "number",
      unit: "㎜",
    },
    {
      label: "트랙높이",
      name: "undercarriage.track_height",
      type: "number",
      unit: "㎜",
    },
    {
      label: "트랙중심간거리",
      name: "undercarriage.track_gap",
      type: "number",
      unit: "㎜",
    },
    {
      label: "텀블러간격",
      name: "undercarriage.tumbler_distance",
      type: "number",
      unit: "㎜",
    },
  ];

  return (
    <>
      <Grid container alignItems="flex-start" spacing={2}>
        <Card sx={{ p: 3 }}>
          <Box
            sx={{
              display: "grid",
              // columnGap: 2,
              // rowGap: 2,
              gridTemplateColumns: "repeat(5, 1fr)",
              // gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(4, 1fr)' },
            }}
          >
            {InputForms.map((fieldData) => (
              <TextFieldInput fieldData={fieldData} control={control} />
            ))}
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default DimensionsTrack;
