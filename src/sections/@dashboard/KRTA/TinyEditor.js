import React, { useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";

function TinyEditor ({ onChange, value }) {
  const [content, setContent] = useState("")
    // const handleEditorChange = (_content, _editor) => { setContent(_content) }
  const handleEditorChange = (editor) => onChange(editor);
  // console.log(value)
    
  return (
    <div>
        <Editor
              tinymceScriptSrc="/tinymce/tinymce.min.js"
              value={value}
              init={{ selector: "textarea", height: "400", resize: true, menubar: false }}
              onEditorChange={handleEditorChange}
            />        

            
    </div>
  )
}

export default TinyEditor