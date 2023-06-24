import { Schema, models, model } from "mongoose";



const NPDitemsSchema = new Schema(
  {
    itemName: String,
    label: String,
    group: String,
    state: String,
    market: Array,
    stage: Array
        
    

  },
  { timestamps: true }
);

export default models.NPDitems || model("NPDitems", NPDitemsSchema);
