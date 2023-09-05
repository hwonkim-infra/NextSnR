import PropTypes from 'prop-types';
// form
import {  Controller } from 'react-hook-form';
// @mui
import { Switch, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

RHFSwitch.propTypes = {
  name: PropTypes.string,
};

export default function RHFSwitch({ name, control, ...other }) {
  
  

  return (
    <FormControlLabel
      control={
        <Controller name={name} control={control} defaultValue="true" render={({ field }) => <Switch {...field} checked={field.value} />} />
      }
      {...other}
    />
  );
}
