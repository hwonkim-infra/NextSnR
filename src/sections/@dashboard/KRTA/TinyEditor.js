import React, { useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";

function TinyEditor ({ onChange, value }) {
  const [content, setContent] = useState("")
    const handleEditorChange = (_content, _editor) => {
      setContent(_content)
    }
    // console.log(value)
    
  return (
    <div>
        <Editor
              tinymceScriptSrc="/tinymce/tinymce.min.js"
              value={JSON.stringify(content)}
              init={{ selector: "textarea", height: "400", resize: true, menubar: false }}
              onEditorChange={handleEditorChange}
            />        
            {JSON.stringify(content)} 
            {value = content} 

            
    </div>
  )
}

export default TinyEditor