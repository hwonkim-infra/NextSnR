import React from "react";
import {  
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import { RHFTextField } from "../hook-form";

const DimensionsQC = () => {
  

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
                gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(4, 1fr)' },
              }}
            >
        <RHFTextField label="퀵커플러(1)" name="attachments.quick_coupler_1" margin="none" InputProps={{ endAdornment: <InputAdornment position="end"> </InputAdornment>, }} />
        <RHFTextField label="커플러 중량" name="attachments.quick_coupler_weight_1" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎏</InputAdornment>, }} />
        <RHFTextField label="퀵커플러(2)" name="attachments.quick_coupler_2" margin="none" InputProps={{ endAdornment: <InputAdornment position="end"></InputAdornment>, }} />
        <RHFTextField label="커플러 중량" name="attachments.quick_coupler_weight_2" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎏</InputAdornment>, }} />
        <RHFTextField label="높이 woQC" name="overall_height_woQC" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
        <RHFTextField label="길이 woQC" name="overall_length_woQC" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
        <RHFTextField label="최대굴착반경" name="attachments.digging_reach" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
        <RHFTextField label="최대굴착반경 woQC" name="attachments.digging_reach_woqc" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
        <RHFTextField label="최대굴착깊이" name="attachments.digging_depth" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
        <RHFTextField label="최대굴착깊이 woQC" name="attachments.digging_depth_woqc" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
        <RHFTextField label="최대덤프높이" name="attachments.loading_height" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
        <RHFTextField label="최대덤프높이 woQC" name="attachments.loading_height_woqc" margin="none" type="number" InputProps={{ endAdornment: <InputAdornment position="end">㎜</InputAdornment>, }} />
               
               
              
            </Box>

            
          </Card>
          </Grid>
        </Paper>

      </div>
    </>
  );
};

export default DimensionsQC;
