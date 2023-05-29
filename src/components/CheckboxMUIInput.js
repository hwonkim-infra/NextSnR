import { Checkbox } from "@mui/material";
import { Fragment } from "react";
import { Controller } from "react-hook-form";

const CheckboxMUIInput = ({ fieldData, control }) => {
  return (
    <Fragment>
      <label htmlFor="">{fieldData.label}</label>

      <Controller
        render={({ field }) => <Checkbox {...field} />}
        name={fieldData.name}
        control={control}
      />
    </Fragment>
  );
};

export default CheckboxMUIInput;
