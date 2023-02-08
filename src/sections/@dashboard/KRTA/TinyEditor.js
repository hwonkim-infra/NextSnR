import React from 'react'
import { Editor } from "@tinymce/tinymce-react";

function TinyEditor ({ onChange, value }) {
    // const handleEditorChange = (editor) => onChange(editor);

  return (
    <div>
        <Editor
              tinymceScriptSrc="/tinymce/tinymce.min.js"
              value={value}
              init={{ selector: "textarea", height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
    </div>
  )
}

export default TinyEditor