import React from "react";
import {  
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import { RHFTextField } from "../hook-form";

const Dimensions = () => {

  
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
            <RHFTextField label="길이" name="overall_length" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
            <RHFTextField label="너비" name="overall_width" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
            <RHFTextField label="높이" name="overall_height" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
            <RHFTextField label="최저지상고" name="undercarriage.ground_clearance" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
            <RHFTextField label="후방선회반경" name="rear_swing_radius" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
            <RHFTextField label="배토판너비x높이" name="undercarriage.dozer_size" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
            
          </Box>

          
        </Card>
        </Grid>
      </Paper>

    </div>
  </>
  );
};

export default Dimensions;
