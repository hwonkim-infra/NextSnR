// form
import { useFormContext, useForm, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------



export default function RHFTxtField({ name, control, label, value   }) {
  // const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      // defaultValue = {value ||''}
      render={({ field }) => (
        <TextField
        label={label}
        {...field}
        />
      )}
    />
  );
}
