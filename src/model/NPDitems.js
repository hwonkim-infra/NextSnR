import { Schema, models, model } from "mongoose";



const NPDitemsSchema = new Schema(
  {
    itemName: String,
    label: String,
    reference: String,
    group: String,
    state: String,
    npdStage: String,
    markets: Array,
        
    

  },
  { timestamps: true }
);

export default models.NPDitems || model("NPDitems", NPDitemsSchema);
