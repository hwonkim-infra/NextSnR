import { Schema, models, model } from 'mongoose';
// const Schema = mongoose.Schema;

const GLOBALSchema = new Schema({
        // GLOBAL 구조
        id: String,
        type: String,
        numbers: Number,
        arcs: Array,
        properties: {
            name: String,
            emission: String,
            noise: String,
            safety: String,
            typeApproval: String,
            roadLimit: String,
            remarks: String,
            description: String,
            tags: Array,
            actions: Array,
        },

        date: Date,
    
    
}, { timestamps: true });



export default models.GLOBAL || model("GLOBAL", GLOBALSchema);
