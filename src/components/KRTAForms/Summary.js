import React from "react";
import {  
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import { RHFTextField } from "../hook-form";

const Summary = () => {

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
              <RHFTextField label="기종명" name="model_name" />
              <RHFTextField label="일련번호" name="serial_no" />
              <RHFTextField label="형식번호" name="registration_no" />

              

              <RHFTextField label="변속기" name="gearbox" placeholder="무변속" />
              <RHFTextField label="자체중량" name="operating_weight" type="number" />
              <RHFTextField label="규격" name="machine_grade" />
              <RHFTextField label="암" name="attachments.arm_length"  type="number" />
              <RHFTextField label="버켓 용량(평적)" name="attachments.bucket_struck"  type="number" />
              <RHFTextField label="버켓 용량(산적)" name="attachments.bucket_heap"  type="number" />
            </Box>

          </Card>
          </Grid>
        </Paper>

      </div>
    </>
  );
};

export default Summary;
