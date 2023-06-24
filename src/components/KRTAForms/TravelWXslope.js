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

const TravelWXslope = ({ control, values }) => {
 
  const formFieldsBraking = [
    {
      label: "브레이크 압력",
      name: "travel.brake_pressure",
      type: "number",
      unit: "bar",
    },
    {
      label: "브레이크 효율",
      name: "travel.brake_eff",
      type: "number",
      unit: "",
    },
    {
      label: "허브 감속비",
      name: "travel.axle_hub_reduction",
      type: "number",
      unit: "",
    },

    {
      label: "브레이크 토크",
      name: "travel.brake_torque_axle",
      type: "number",
      unit: "㎏f",
    },
  ];


  const formFieldsTravelSlope = [
    {
      label: "견인력",
      name: "travel.traction_force",
      type: "number",
      unit: "Nm",
    },

    {
      label: "지면마찰계수",
      name: "travel.friction_surface",
      type: "number",
      unit: "",
    },
    {
      label: "주행저항계수",
      name: "travel.running_resist",
      type: "number",
      unit: "",
    },
    {
      label: "기준등판각도",
      name: "travel.engine_slope",
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
          <Typography variant="subtitle2">등판능력</Typography>
          <Accordion
            expanded={expanded === "panel31"}
            onChange={handleChange("panel31")}
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
                견인력, 지면마찰, 주행저항, 기준등판각
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {formFieldsTravelSlope.map((fieldData) => (
                <TextFieldInput key={fieldData.name}  fieldData={fieldData} control={control} />
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel32"}
            onChange={handleChange("panel32")}
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
                    label="등판능력"
                    {...field}
                    value={field.value || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">{"deg"}</InputAdornment>
                      ),
                    }}
                  />
                )}
                name={"travel.greadability_tested"}
                type={"number"}
                control={control}
              />

              <Controller
                name="travel.greadability_description"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TinyEditor onChange={onChange} value={value} />
                )}
              />
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ p: 1 }}>
          <Typography variant="subtitle2">제동능력</Typography>
          <Accordion
            expanded={expanded === "panel41"}
            onChange={handleChange("panel41")}
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
                브레이크 압력, 효율, 오크, 허브 감속비, 타이어 동하중
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {formFieldsBraking.map((fieldData) => (
                                <TextFieldInput fieldData={fieldData} control={control} />

              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel42"}
            onChange={handleChange("panel42")}
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
                    label="제동 거리"
                    {...field}
                    value={field.value || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">{"m"}</InputAdornment>
                      ),
                    }}
                  />
                )}
                name={"travel.braking_distance_max_tested"}
                type={"number"}
                control={control}
              />
              <Controller
                name="travel.braking_description"
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

export default TravelWXslope;
