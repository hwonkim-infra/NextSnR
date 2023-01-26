const { Schema, models, model } = require("mongoose");

const taskSchema = new Schema(
    {
    title: { type: String, required: [true, 'The task title is required'], unique: true, trim: true, maxlength: [40, "title length is up to 40"]},
    description: { type: String, required: [true, 'description is required'], trim: true, maxlength: [400, "title length is up to 400"]},
},
{
    timestamps: true, 
    // versionKey: true, 
}
)

export default models.Task || model("Task", taskSchema);

