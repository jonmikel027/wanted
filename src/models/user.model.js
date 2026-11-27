import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio."],
        trim: true,
        maxlength: [50, "El nombre no puede superar los 50 caracteres."]
    },
    badge: {
        type: String,
        required: [true, "La placa es obligatoria."],
        trim: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: [true, "El hash de la contraseña es obligatorio."]
    },
    role: {
        type: String,
        required: [true, "El rol es obligatorio."],
        enum: {
            values: ["user", "admin"],
            message: "El rol debe ser 'user' o 'admin'."
        },
        default: "user"
    },
    isActive: {
        type: Boolean,
        required: [true, "El estado de la cuenta es obligatorio."],
        default: true
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model("User", userSchema);

export { UserModel };