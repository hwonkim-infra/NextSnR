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
    // { label: "일련번호", name: "serial_no", type: "number" },
    // { label: "형식번호", name: "registration_no", type: "number" },
  ];

  const TargetMarketForms = [
    // { label: "EU", name: "targetMarket.europeanUnion" },
    { label: "북미", name: "targetMarket.northAmerica" },
    { label: "한국", name: "targetMarket.korea" },
  ];

  return (
    <>
        {/* <Grid container spacing={2}> */}
          {/* <Card sx={{ p: 3 }}> */}
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
            
          {/* </Card> */}
        {/* </Grid> */}
    </>
  );
};

export default NPDSummary;
