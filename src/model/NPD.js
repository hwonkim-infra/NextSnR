import { Schema, models, model } from "mongoose";

// var NPDStage = DesignItems.map((item) => ( {item: item, State_Desc: State_Desc} ));

// const Schema = mongoose.Schema;

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
  { timestamps: true }
);

export default models.NPD || model("NPD", NPDSchema);
