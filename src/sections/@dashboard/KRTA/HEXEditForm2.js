import React from 'react'
import { Controller, useForm } from "react-hook-form";
// import { FormProvider, RHFTextField } from "@/components/hook-form";
import TinyEditor from "./TinyEditor";
import Summary from "@/components/KRTAForms/Summary";
import { TextField } from '@mui/material';

const defaultValues = {
  ECN: null,
  engine: { engine_name: null },
  undercarriage: { ground_clearance: null },
  attachments: { bucket_struck: null },
  swivel: {
    pump_flow: null,
    
  },
  travel: {
    pump_displacement: null,
  },
  drawings: {
    exterior: null,
  },
  description: {
    swing_reduction: null
  },
  COG: {
    upperStructure_longitudinal: null
  },
  transport: {
    transport_1: "본체",
    transport_1_weight: null,

  }
}

const RHFTxtField = ({ name, label, ...other }) => {
  // const { control } = useFormContext();
  const { control } = useForm({});

  return (
    <Controller
      name={name}
      control={control}
      defaultValue = {''}
      render={({ field, fieldState: { error } }) => (
        <TextField
        label={label}
          {...field}
          error={!!error}
          helperText={error?.message}
          // {...other}
        />
      )}
    />
  );
}


const HEXEditForm = () => {
  const { control, handleSubmit, setValue, watch } = useForm({defaultValues: defaultValues});
  const values = watch()
  const onSubmit = (data) => console.log(data);
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
              <Summary />
              <Controller
      name={"attachments.quick_coupler_weight_1"}
      control={control}
      defaultValue = {''}
      render={({ field, fieldState: { error }, }) => (
        <TextField
        label="퀵커플러"
          {...field}
          error={!!error}
          helperText={error?.message}
          // {...other}
        />
      )}
    />
    <Controller
      name={"rear_swing_radius"}
      control={control}
      defaultValue = {''}
      render={({ field, fieldState: { error }, }) => (
        <TextField
        label="선회반경"
          {...field}
          error={!!error}
          helperText={error?.message}
          // {...other}
        />
      )}
    />
              <RHFTxtField label="선회반경" name={"rear_swing_radius"} />
        <Controller
          name="drawings.exterior"
          control={control}
          defaultValue=""
          render={({field: {onChange, value} }) => (
            <TinyEditor onChange={onChange} value={value} />
          )}
        />
        <input type="submit" />
        {JSON.stringify(values,0,2)}

      </form>
    </div>
  )
}

export default HEXEditForm