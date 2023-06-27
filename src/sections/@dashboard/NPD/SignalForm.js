import {
  Box,
  CircularProgress,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Fragment } from "react";
import { Controller } from "react-hook-form";

import React from "react";

export default function SignalForm({
  currentNPD,
  NPDStage,
  control,
  group,
  groupName,
}) {
  if (!currentNPD) return <CircularProgress />;
  const groupIndexing = (groupName) => {
    const indexes = [];
    for (let i = 0; i < currentNPD?.length; i++) {
      if (currentNPD[i].group === groupName) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 1, width: "100%" }}>
        <h3>{groupName}</h3>

        <Box sx={{ p: 1 }}>
          {currentNPD.map((item, index) => {
            if (groupIndexing(group).includes(index)) {
              return (
                <Fragment key={item.itemName}>
                  <h4>{item.label}</h4>
                  <Box sx={{ p: 1 }}>
                    <Stack direction="row">
                      <Controller
                        name={`npdStage.${NPDStage}[${index}].state`}
                        render={({ field }) => (
                          <Select {...field}>
                            <MenuItem value={"green"}>✅Green</MenuItem>
                            <MenuItem value={"yellow"}>🟨Yellow</MenuItem>
                            <MenuItem value={"red"}>❌Red</MenuItem>
                            <MenuItem value={"white"}>🔘White</MenuItem>
                            <MenuItem value={"NA"}>No Account</MenuItem>
                          </Select>
                        )}
                        control={control}
                      />

                      <Controller
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            label={"description"}
                            {...field}
                            fullWidth
                            size="small"
                            variant="standard"
                            value={field.value || ""}
                          />
                        )}
                        name={`npdStage.${NPDStage}[${index}].description`}
                        control={control}
                      />
                    </Stack>
                  </Box>
                </Fragment>
              );
            }
          })}
        </Box>
      </Paper>
    </>
  );
}
