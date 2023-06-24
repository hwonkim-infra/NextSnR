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

const DimensionsWLbkt = ({ control }) => {
  const InputFormsWLbkt = [
      { label: "버켓전경각", name: "attachments.dump_angle_lift", type: "number", unit: "deg", },
      { label: "버켓후경각", name: "attachments.rack_angle_carry", type: "number", unit: "deg", },
      { label: "최대덤프높이", name: "attachments.level_bucket_clearance", type: "number", unit: "㎜", },
      { label: "덤프거리", name: "attachments.bucket_reach", type: "number", unit: "㎜", },
  ];

  return (
    <>
      <Card sx={{ p: 1 }}>
            <Box
              sx={{
                display: "grid",
                // columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns:  {
                    sm: "repeat(4, 1fr)",
                  },
              }}
            >
              {InputFormsWLbkt.map((fieldData) => (
                <TextFieldInput key={fieldData.name} fieldData={fieldData} control={control} />
              ))}
            </Box>
        
      </Card>
    </>
  );
};

export default DimensionsWLbkt;
