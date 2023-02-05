import React from "react";
import {  
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import { RHFTextField } from "../hook-form";

const Swivel = () => {


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
              <RHFTextField label="선회펌프 유량" name="swivel.pump_flow" type="number"  InputProps={{endAdornment: <InputAdornment position="end">l/min"</InputAdornment>}} />
              <RHFTextField label="선회모터 용적" name="swivel.motor_displacement" type="number"  InputProps={{endAdornment: <InputAdornment position="end">cc/rev</InputAdornment>}} />
              <RHFTextField label="선회 감속비" name="swivel.reduction" type="number"  InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />
              <RHFTextField label="선회모터 용적 효율" name="swivel.motor_eff" type="number"  InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />
              
            </Box>

            
          </Card>
          </Grid>
        </Paper>

      </div>

    </>
  );
};

export default Swivel;
