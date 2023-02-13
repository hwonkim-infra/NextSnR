// import { FieldArray } from 'react-final-form-arrays'
// import FieldArray from "./fieldArray";
import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";
import { useFieldArray, useForm } from "react-hook-form";

const DrawingAdditional = ({control}) => {
  const { register, handleSubmit, getValues, errors, reset, setValue } =
    useForm({
      // defaultValues
    });

  const { fields, append, remove, prepend } = useFieldArray({  
    name: "test",
  });

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input {...register(`test.${index}.name`)} />
              <Controller
            control={control}
            name={`test.${index}.lastName`}
            render={({ field: { onChange, value } }) => (
              <TinyEditor onChange={onChange} value={value} />
            )}
          />

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

    </>
  );
};

export default DrawingAdditional;
