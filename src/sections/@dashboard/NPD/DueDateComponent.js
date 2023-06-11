import { Box, Grid, Stack, Typography } from "@mui/material";
import "react-multi-date-picker/styles/layouts/prime.css";


import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";


export default function DueDateComponent({ control, NPDStage }) {
    // const NPDStage = "FDR";
  return (
    <>
        <Grid item xs={12}>
          <Box sx={{p:2}}>
            <>
              <Stack direction="row" >
                <Typography variant="subtitle1">Due Date:</Typography>

                <Controller
                  control={control}
                  name={`npdStage.${NPDStage}.dueDate`}
                  render={({ field }) => (
                    <>
                      <DatePicker
                        className="rmdp-prime"
                        label="Due Date"
                        selected={Date.parse(field.value)}
                        onChange={(e) => field.onChange(e)}
                        value={field.value || ""}
                      />
                    </>
                  )}
                />
              </Stack>
            </>
          </Box>
        </Grid>
        
    </>
  )
}

