import {
  Box,
  Card,
  Grid,
  Paper
} from "@mui/material";
import TextFieldInput from "./TextFieldInput";

const TravelHX = ({ control }) => {
  const InputForms = [
    { label: "주행펌프 유량", name: "travel.pump_displacement", type: "number", unit: "l/min" },
    { label: "주행모터 용적(1)", name: "travel.TM_flow_1", type: "number", unit: "cc/rev" },
    { label: "주행모터 용적(2)", name: "travel.TM_flow_2", type: "number", unit: "cc/rev" },
    { label: "주행모터 용적 효율(μ<sub>mv</sub>)", name: "travel.TM_mv", type: "number", unit: " " },    
    { label: "주행 감속비", name: "travel.reduc", type: "number", unit: "" },
    { label: "스프로켓 반경", name: "travel.sprocket_radius", type: "number", unit: "㎜" },
    { label: "주행펌프 압력", name: "travel.pump_pressure", type: "number", unit: "(P, bar)" },
    { label: "주행 견인력", name: "travel.traction_force", type: "number", unit: "㎏f" },
    { label: "주행모터 기계 효율(μ<sub>mt</sub>)", name: "travel.TM_mt", type: "number", unit: "" },    
    { label: "동력 전달 효율(μ<sub>r</sub>)", name: "travel.TM_r", type: "number", unit: "" },    
    { label: "구동 점착 계수(μ<sub>mv</sub>)", name: "travel.surface_drag", type: "number", unit: "" },    
    { label: "주행 저항 계수(η)", name: "travel.drag", type: "number", unit: "" },    
    { label: "지면마찰계수", name: "travel.friction_surface", type: "number", unit: "" },    
    { label: "기준등판각도", name: "travel.greadability_ref", type: "number", unit: "°" },    
    { label: "브레이크 토크", name: "travel.brake_torque", type: "number", unit: "㎏m" },    
  ];

  return (
    <>
       
       <div className="input-group mb-1">
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(4, 1fr)' },
              }}
            >
             {InputForms.map((fieldData) => (
                <TextFieldInput fieldData={fieldData} control={control} />

                  
                ))}
            </Box>

            
          </Card>
          </Grid>
        </Paper>

      </div>
    </>
  );
};

export default TravelHX;
