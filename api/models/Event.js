import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        conclusion_prevision: {
            type: Date,
            required: false
        },
        cust: {
            type: Number,
            required: false,
            default: 0
        },
        remenber: {
            type: [String],
            required: false,
            default: []
        },
        conclued: {
            type: Number,
            required: false,
            default: 0,
            min: 0,
            max: 0
        }
    },
    { timestamps: true }
);

export default mongoose.model("EventSchema", EventSchema);