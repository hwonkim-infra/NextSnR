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

const TravelWX = ({ control, values }) => {
  const formFieldsSpeed = [
    {
      label: "주행 펌프 용량",
      name: "travel.pump_displacement_travel",
      type: "number",
      unit: "l/min",
    },
    {
      label: "주행 모터 용적",
      name: "travel.motor_displacement_travel",
      type: "number",
      unit: "㏄/rev",
    },
    {
      label: "주행 모터 효율",
      name: "travel.motor_eff_travel",
      type: "number",
      unit: "",
      min: "0",
      max: "1",
    },
    {
      label: "감속비: 미션",
      name: "travel.TM_reduction",
      type: "number",
      unit: "",
    },
    {
      label: "감속비: 액슬",
      name: "travel.axle_reduction",
      type: "number",
      unit: "",
    },
    {
      label: "타이어 동하중 반경",
      name: "travel.tire_rolling_radius",
      type: "number",
      unit: "㎜",
    },
  ];
  
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
    
  ]

  const formFieldsTravelRadius = [
    {
      label: "킹핀 간격",
      name: "travel.kingpin_gap",
      type: "number",
      unit: "㎜",
    },
    {
      label: "킹핀 - 타이어 간격",
      name: "travel.kingpin_offset",
      type: "number",
      unit: "㎜",
    },
    {
      label: "외륜최대조향각",
      name: "travel.wheel_angle",
      type: "number",
      unit: "",
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
        <Box sx={{p:1}}>

        <Typography variant="subtitle2">주행 속도</Typography>
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
              주행펌프, 주행모터 용적, 미션/액슬 감속비
            </Typography>

           
          </AccordionSummary>
          <AccordionDetails>
            {formFieldsSpeed.map((fieldData) => (
              <Controller
                key={fieldData.name}
                render={({ field }) => (
                  <TextField
                    label={fieldData.label}
                    {...field}
                    value={field.value || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {fieldData.unit}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                name={fieldData.name}
                type={fieldData.type}
                control={control}
              />
            ))}
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
                  label="주행 속도"
                  {...field}
                  value={field.value || ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">{"km/hr"}</InputAdornment>
                    ),
                  }}
                />
              )}
              name={"travel.travel_speed"}
              type={"number"}
              control={control}
            />
            <Controller
              name="travel.travel_speed_description"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TinyEditor onChange={onChange} value={value} />
              )}
            />
          </AccordionDetails>
        </Accordion>
        </Box>

        <Box sx={{p:1}}>
        <Typography variant="subtitle2">최소회전반경</Typography>
        <Accordion
          expanded={expanded === "panel21"}
          onChange={handleChange("panel21")}
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
              킹핀-타이어 간격, 외륜조향각 데이터 입력{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {formFieldsTravelRadius.map((fieldData) => (
              <Controller
                key={fieldData.name}
                render={({ field }) => (
                  <TextField
                    label={fieldData.label}
                    {...field}
                    value={field.value || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {fieldData.unit}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                name={fieldData.name}
                type={fieldData.type}
                control={control}
              />
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel22"}
          onChange={handleChange("panel22")}
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
                  label="최소회전반경"
                  {...field}
                  value={field.value || ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">{"m"}</InputAdornment>
                    ),
                  }}
                />
              )}
              name={"travel.turning_radius"}
              type={"number"}
              control={control}
            />
            <Controller
              name="travel.turning_radius_description"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TinyEditor onChange={onChange} value={value} />
              )}
            />
          </AccordionDetails>
        </Accordion>
        </Box>

        <Box sx={{p:1}}>
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
              <Controller
                key={fieldData.name}
                render={({ field }) => (
                  <TextField
                    label={fieldData.label}
                    {...field}
                    value={field.value || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {fieldData.unit}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                name={fieldData.name}
                type={fieldData.type}
                control={control}
              />
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
              name={"travel.greadability"}
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

        <Box sx={{p:1}}>
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
              <Controller
                key={fieldData.name}
                render={({ field }) => (
                  <TextField
                    label={fieldData.label}
                    {...field}
                    value={field.value || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {fieldData.unit}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                name={fieldData.name}
                type={fieldData.type}
                control={control}
              />
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
              name={"travel.braking_distance_max"}
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



        {/* <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "grid",
                // columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: "2fr 2fr",
              }}
            >
              {formFieldsSpeed.map((fieldData) => (
                <Controller
                  key={fieldData.name}
                  render={({ field }) => (
                    <TextField
                      label={fieldData.label}
                      {...field}
                      value={field.value || ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {fieldData.unit}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  name={fieldData.name}
                  type={fieldData.type}
                  control={control}
                />
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
              {formFieldsTravelSlope.map((fieldData) => (
                <Controller
                  key={fieldData.name}
                  render={({ field }) => (
                    <TextField
                      label={fieldData.label}
                      {...field}
                      value={field.value || ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {fieldData.unit}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  name={fieldData.name}
                  type={fieldData.type}
                  control={control}
                />
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
              {formFieldsTravelRadius.map((fieldData) => (
                <Controller
                  key={fieldData.name}
                  render={({ field }) => (
                    <TextField
                      label={fieldData.label}
                      {...field}
                      value={field.value || ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {fieldData.unit}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  name={fieldData.name}
                  type={fieldData.type}
                  control={control}
                />
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
              {manualFieldsTravel.map((fieldData) => (
                <Controller
                  key={fieldData.name}
                  render={({ field }) => (
                    <TextField
                      label={fieldData.label}
                      {...field}
                      value={field.value || ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {fieldData.unit}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  name={fieldData.name}
                  type={fieldData.type}
                  control={control}
                />
              ))}
            </Box>
          </Grid>
        </Grid> */}
      </Paper>
    </>
  );
};

export default TravelWX;
