import React from 'react'
import { useFieldArray } from "react-hook-form";

const Fields = ({ control, register, setValue, getValues }) => {
    const { fields, append, remove, prepend } = useFieldArray({
        name: "test"
      });

  return (
    <>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                
                <input {...register(`test.${index}.name`)} />
  
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
  
        <section>
          <button
            type="button"
            onClick={() => {
              append({ name: "append" });
            }}
          >
            append
          </button>
  
         
  
          <button
            type="button"
            onClick={() => {
              prepend({ name: "append" });
            }}
          >
            prepend
          </button>
  
          
        </section>
  
        <span className="counter">Render Count: {renderCount}</span>
      </>
  )
}

export default Fields