import { Schema, models, model } from "mongoose";
// const Schema = mongoose.Schema;

const TCFSchema = new Schema(
  {
    // TCF 구조
    item: String,
    reference: String,
    docs: [{type: Schema.Types.ObjectId, ref: 'TCFDoc'}]
  },
  { timestamps: true }
);
      
export default models.TCF || model("TCF", TCFSchema);
