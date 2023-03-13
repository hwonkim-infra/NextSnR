import { Schema, models, model } from 'mongoose';
// const Schema = mongoose.Schema;

const PSCSchema = new Schema({
        // PSC 구조
        item: String,
        reference: String,
        requirements: String,    
        riskReduct: String,
        complyStatements: String,
        hazardDescript: String,
        description: String,
        tags: Array,
        actions: Array,
        region: {
                northAmerica: String,
                australia: String,
                CUTR: String,     
                CUTRs: String,     
                brazil: String,     
                otherRegion: String,
        },
        regions: String,
        date: Date,
    
    
}, { timestamps: true });



export default models.PSC || model("PSC", PSCSchema);
