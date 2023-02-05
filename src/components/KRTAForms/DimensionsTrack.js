import React from "react";
import {  
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import { RHFTextField } from "../hook-form";

const DimensionsTrack = () => {



  return (
    <>

<div className="input-group mb-1">
        <Paper style={{ padding: 4 }}>
          <Grid container alignItems="flex-start" spacing={2}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                // rowGap: 2,
                gridTemplateColumns: 'repeat(5, 1fr)',
                // gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(4, 1fr)' },
              }}
            >
      <RHFTextField label="슈폭" name="undercarriage.shoe_width" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />
      <RHFTextField label="트랙길이" name="undercarriage.track_length" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />
      <RHFTextField label="트랙높이" name="undercarriage.track_height" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />
      <RHFTextField label="트랙중심간거리" name="undercarriage.track_gap" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />
      <RHFTextField label="텀블러간격" name="undercarriage.tumbler_distance" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />
        
               
              
            </Box>

            
          </Card>
          </Grid>
        </Paper>


    </div>

    </>
  );
};

export default DimensionsTrack;
