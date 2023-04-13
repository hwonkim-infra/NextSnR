import { Schema, models, model } from "mongoose";

const NoiseCertiSchema = new Schema(
  {
    // NoiseCerti 구조
    certiNumber: String,
    certiFactory: String,
    conformityAssessment: String,
    certiIssue: Date,
    certiExpire: Date,
    certification: String,

    
    models: [{
        model_name: String,
        TechnicalDoc: String,
        Noise_Measured: Number,
        Noise_Guaranteed: Number,
        Noise_Limit: Number,
        Rated_Power: Number,
    }]
  },
  { timestamps: true }
);
      
export default models.NoiseCerti || model("NoiseCerti", NoiseCertiSchema);
