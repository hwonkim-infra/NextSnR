import { Schema, models, model } from "mongoose";

const NoiseTDSchema = new Schema(
  {
    // NoiseTD 구조
    certiNumber: String,
    certiFactory: String,
    conformityAssessment: String,
    certiIssue: Date,
    certiExpire: Date,
    certification: String,

    model_name: String,
    TechnicalDoc: String,
    Noise_Measured: Number,
    Noise_Guaranteed: Number,
    Noise_Limit: Number,
    Rated_Power: Number,
    
  },
  { timestamps: true }
);
      
export default models.NoiseTD || model("NoiseTD", NoiseTDSchema);
