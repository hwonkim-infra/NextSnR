import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";

import { useState } from "react";
import { Controller } from "react-hook-form";
import TextFieldInput from "./TextFieldInput";

import SwivelSpeed from "@/components/KRTAForms/print/SwivelSpeed";

const Swivel = ({ control, values }) => {
  const InputForms = [
    {
      label: "선회펌프 유량",
      name: "swivel.pump_flow",
      type: "number",
      unit: "l/min",
    },
    {
      label: "선회모터 용적",
      name: "swivel.motor_displacement",
      type: "number",
      unit: "cc/rev",
    },
    {
      label: "선회 감속비 (선회베어링/피니언)",
      name: "swivel.reduction",
      type: "number",
      unit: "",
      placeholder: "선회베어링/피니언",
    },
    {
      label: "선회모터 용적 효율",
      name: "swivel.motor_eff",
      type: "number",
      unit: "",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Paper sx={{ p: 2, borderRadius: 1 }}>
        <Box sx={{ p: 1 }}>
          <Typography variant="subtitle2">선회 속도</Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                (Opt. 1) 계산 데이터 입력
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                선회펌프 유량, 용적, 감속비, 효율
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Card sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "grid",
                        columnGap: 2,
                        // rowGap: 2,
                        gridTemplateColumns: {
                          xs: "repeat(4, 1fr)",
                          sm: "repeat(4, 1fr)",
                        },
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
        <SwivelSpeed values={values}  />

                  </Card>
                </Grid>
              </Paper>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                (Opt. 2) 결과 직접 입력
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                시험결과 등 별도의 자료 입력
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Controller
                render={({ field }) => (
                  <TextField
                    label="선회 속도"
                    {...field}
                    value={field.value || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">{"rpm"}</InputAdornment>
                      ),
                    }}
                  />
                )}
                name={"swivel.swing_rev"}
                type={"number"}
                placeholder={"선회속도 직접 입력"}
                control={control}
              />
              <Controller
                name="swivel.swing_description"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TinyEditor onChange={onChange} value={value} />
                )}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Paper>
    </>
  );
};

export default Swivel;
