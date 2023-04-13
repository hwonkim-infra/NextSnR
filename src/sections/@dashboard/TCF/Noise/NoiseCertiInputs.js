import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
// import dayjs from 'dayjs';
// import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TAGS_OPTION = ["MD", "EU", "NA", "China", "Korea"];

import DatePicker from "react-datepicker";

import { useState } from "react";

// import "./react-datepicker.css"
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const NoiseCertiInputs = ({ control }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Box
        className="container"
        sx={{
          display: "grid",
          columnGap: 2,
          rowGap: 2,
          gridTemplateColumns: "auto",
        }}
      >
        <Controller
          name="certiNumber"
          control={control}
          render={({ field }) => (
            <TextField
              multiline
              label="인증서 번호"
              {...field}
              InputLabelProps={{}}
              value={field.value || ""}
            />
          )}
        />
        <Controller
          name="certiFactory"
          control={control}
          render={({ field }) => (
            <TextField
              multiline
              label="생산처"
              {...field}
              InputLabelProps={{}}
              value={field.value || ""}
            />
          )}
        />
<Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-center"
          sx={{}}
        >
          <Box>
            <Typography variant="subtitle2">인증서 발행</Typography>
          </Box>
          <Box>
            <Controller
              control={control}
              name="certiIssue"
              render={({ field }) => (
                <>
                  <DatePicker
                    label="인증서 발행"
                    selected={Date.parse(field.value)}
                    onChange={(e) => field.onChange(e)}
                  />
                </>
              )}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2">인증서 종료</Typography>
          </Box>
          <Box>
            <Controller
              control={control}
              name="certiExpire"
              render={({ field }) => (
                <>
                  <DatePicker
                    label="인증서 종료"
                    selected={Date.parse(field.value)}
                    onChange={(e) => field.onChange(e)}
                  />
                </>
              )}
            />
          </Box>
        </Stack>
        <Controller
          name="conformityAssessment"
          control={control}
          render={({ field }) => (
            <TextField
              multiline
              label="Conformity Assessment Procedure"
              {...field}
              InputLabelProps={{}}
              value={field.value || ""}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name={`certification`}
          render={({ field: { onChange, value } }) => (
            <>
              <TinyEditor onChange={onChange} value={value} />
            </>
          )}
        />

        
      </Box>
    </>
  );
};

export default NoiseCertiInputs;
