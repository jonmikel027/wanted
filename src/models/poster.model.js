import mongoose from "mongoose";

const posterSchema = new mongoose.Schema({
    wantedPerson: {
        type: String,
        trim: true,
        required: [true, "El nombre de la persona buscada es obligatorio."],
        maxlength: [50, "El nombre no puede superar los 50 caracteres."]
    },
    photoUrl: {
        type: String,
        trim: true,
        required: false
    },
    info: {
        type: String,
        trim: true,
        required: [true, "La información del cartel es obligatoria."],
        maxlength: [500, "La información no puede superar los 500 caracteres."]
    },
    reward: {
        type: Number,
        required: [true, "La recompensa es obligatoria."],
        cast: "La recompensa debe ser un número.",
        min: [1, "La recompensa debe ser igual o mayor que 1."],
        validate: {
            validator: Number.isInteger,
            message: "La recompensa debe ser un número entero."
        }
    },
    status: {
        type: String,
        trim: true,
        required: [true, "El estado del cartel es obligatorio."],
        enum: {
            values: ["wanted", "arrested", "cleared"],
            message: "El estado debe ser 'wanted', 'arrested' o 'cleared'."
        },
        default: "wanted"
    },
    openTipLine: {
        type: Boolean,
        required: [true, "Debes indicar si el buzón de pistas está disponible."],
        cast: "El buzón de pistas debe tener un valor booleano válido.",
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "El creador del cartel es obligatorio."],
        cast: "El identificador del creador no tiene un formato válido."
    }
}, {
    timestamps: true
});

const PosterModel = mongoose.model("Poster", posterSchema);

export { PosterModel };