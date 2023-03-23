import { Schema, models, model, mongoose } from "mongoose";
// const Schema = mongoose.Schema;

const TCFDocSchema = new Schema(
  {
    // TCF 구조
    description: String,
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item'}
  },
  { timestamps: true }
);
      
export default models.TCFDoc || model("TCFDoc", TCFDocSchema);
