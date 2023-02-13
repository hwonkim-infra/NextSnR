import {
  Box,
  Card,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";

const TAResult = ({ control }) => {
  


  return (
    <>

<Paper style={{ padding: 16 }}>


             
      <Controller
            name="approval_result"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TinyEditor onChange={onChange} value={value} />
              )}
              />
        
              </Paper>
    </>

  );
};

export default TAResult;
