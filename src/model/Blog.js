import { Schema, models, model } from 'mongoose';
// const Schema = mongoose.Schema;

const BlogSchema = new Schema({
        // Blog 구조
    title: String,
    creator: String,
    reference: String,
    tags: [{type: String}],
    description: String,
    date: Date,
    
    
}, { timestamps: true });



export default models.Blog || model("Blog", BlogSchema);
