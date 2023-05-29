import { Schema, models, model } from "mongoose";

const NPDCheck = [
  {
    itemName: String,
    state: {
      enum: ["Green", "Yellow", "Red"],
    },
    description: String,
  },
];

const NPDSchema = new Schema(
  {
    _id: String,
    
    

  },
  { strict: false, timestamps: true }
);

export default models.NPD || model("NPD", NPDSchema);
