import React from "react";
import {  
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import { RHFTextField } from "../hook-form";

const TravelHX = () => {
  

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
                   <RHFTextField
          label="주행펌프 유량"
          name="travel.pump_displacement"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">l/min"</InputAdornment>
            ),
          }}
        />
        <RHFTextField
          label="주행모터 용적(1)"
          name="travel.TM_flow_1"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">cc/rev</InputAdornment>
            ),
          }}
        />
      
        <RHFTextField
          label="주행모터 용적(2)"
          name="travel.TM_flow_2"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">cc/rev</InputAdornment>
            ),
          }}
        />
        <RHFTextField
          label="모터 용적 효율"
          name="travel.TM_mv"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                (μ<sub>mv</sub>)
              </InputAdornment>
            ),
          }}
        />
      
        <RHFTextField
          label="스프로켓 반경"
          name="travel.sprocket_radius"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      
        <RHFTextField
          label="주행감속비"
          name="travel.reduc"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
        />
      
        <RHFTextField
          label="주행펌프 압력"
          name="travel.pump_pressure"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">(P, bar)</InputAdornment>
            ),
          }}
        />
      
        <RHFTextField
          label="견인력"
          name="travel.traction_force"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎏f</InputAdornment>,
          }}
        />
      
        <RHFTextField
          label="모터 기계 효율"
          name="travel.TM_mt"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                (μ<sub>mt</sub>)
              </InputAdornment>
            ),
          }}
        />
      
        <RHFTextField
          label="동력 전달 효율"
          name="travel.TM_r"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                (μ<sub>r</sub>)
              </InputAdornment>
            ),
          }}
        />
      
        <RHFTextField
          label="구동 점착 계수"
          name="travel.surface_drag"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                (μ<sub>mv</sub>)
              </InputAdornment>
            ),
          }}
        />
      
        <RHFTextField
          label="주행 저항 계수"
          name="travel.drag"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">(η)</InputAdornment>,
          }}
        />
      
        <RHFTextField
          label="지면마찰계수"
          name="travel.friction_surface"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
        />
      
        <RHFTextField
          label="기준등판각도"
          name="travel.greadability_ref"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">°</InputAdornment>,
          }}
        />
      
        <RHFTextField
          label="브레이크 토크"
          name="travel.brake_torque"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎏m</InputAdornment>,
          }}
        />
            </Box>

            
          </Card>
          </Grid>
        </Paper>

      </div>
    </>
  );
};

export default TravelHX;
