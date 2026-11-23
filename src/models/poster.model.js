import mongoose from "mongoose";

const posterSchema = new mongoose.Schema({
    wantedPerson: {
        type: String,
        required: true,
        maxlength: 100
    },
    photoUrl: {
        type: String,
        required: false
    },
    info: {
        type: String,
        required: true,
        maxlength: 500
    },
    reward: {
        type: Number,
        required: true,
        min: 1,
        validate: {
            validator: Number.isInteger,
            message: "la recompensa debe ser un número entero"
        }
    },
    status: {
        type: String,
        required: true,
        enum: ["wanted", "arrested", "cleared"],
        default: "wanted"
    },
    openTipLine: {
        type: Boolean,
        required: true,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    {
        timestamps: true
    });

const PosterModel = mongoose.model("Poster", posterSchema);

export { PosterModel };