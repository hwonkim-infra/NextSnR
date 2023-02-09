// import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
// import { FormHelperText } from '@mui/material';
//
// import Editor from '../editor';
import { Editor } from "@tinymce/tinymce-react";

// ----------------------------------------------------------------------


export default function RHFEditor({ name, ...other }) {
  const { control } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => (
        <Editor
        tinymceScriptSrc="/tinymce/tinymce.min.js"
          value={value}
        init={{ selector: "textarea", height: "400", resize: true, menubar: false }}
        onEditorChange={onChange}
      />    


      )}
      />
      );
    }

      {/* <Editor
        id={name}
        value={field.value}
        onChange={field.onChange}
        error={!!error}
        helperText={
          <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
            {error?.message}
          </FormHelperText>
        }
        {...other}
      /> */}