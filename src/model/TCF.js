import { Schema, models, model } from 'mongoose';
// const Schema = mongoose.Schema;

const TCFSchema = new Schema({
        // TCF 구조
        item: String,
        reference: String,
        requirements: String,    
        riskReduct: String,
        complyStatements: String,
        hazardDescript: String,
        description: String,
        tags: Array,
        models: Array,        
        date: Date,
    
    
}, { timestamps: true });



export default models.TCF || model("TCF", TCFSchema);
