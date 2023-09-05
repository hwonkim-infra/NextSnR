import { Schema, models, model } from "mongoose";


const OptionPSCSchema = new Schema(
  {
    
    

  },
  { strict: false, timestamps: true }
);

export default models.OptionPSC || model("OptionPSC", OptionPSCSchema);
