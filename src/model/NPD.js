import { Schema, models, model } from "mongoose";

const NPDCheck = [
        {
          itemName: String,
          state: {
            enum: ["Green", "Yellow", "Red"],
          },
          description: String,
        },
      ]

const NPDSchema = new Schema(
  {
    // NPD 구조
    model_name: String,

    targetMarket: Array,

    npdStage: {
      ptr: NPDCheck,
      dtr: NPDCheck,
      grFour: NPDCheck
    },
  },
  { timestamps: true },
  {strict: false}
);

export default models.NPD || model("NPD", NPDSchema);
