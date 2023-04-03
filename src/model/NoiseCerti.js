import { Schema, models, model } from "mongoose";

const NoiseCertiSchema = new Schema(
  {
    // NoiseCerti 구조
    certiNumber: String,
    
    models: [{
        model_name: String,
        Noise_Guaranteed: Number,
    }]
  },
  { timestamps: true }
);
      
export default models.NoiseCerti || model("NoiseCerti", NoiseCertiSchema);
