import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { authorizedBadges } from "../config/authorizedBadges.js";
import { validatePassword } from "../utils/validatePassword.js";
import { findUserByBadge, createUser } from "./user.service.js";

async function registerUser({ name, badge, password }) {

    if (typeof badge !== "string" || badge.trim() === "") {

        const error = new Error("Error de Nº de placa. No se puede completar el registro.");
        error.status = 400;
        throw error;
    }

    const badgeToRegister = badge.trim();

    const newUserBadge = authorizedBadges.find(
        (authorizedBadge) => authorizedBadge.badge === badgeToRegister
    );

    if (!newUserBadge) {
        const error = new Error("Error de Nº de placa. No se puede completar el registro.");
        error.status = 400;
        throw error;
    }

    const existingUser = await findUserByBadge(badgeToRegister);

    if (existingUser) {
        const error = new Error("Error de Nº de placa. No se puede completar el registro.");
        error.status = 400;
        throw error;
    }

    if (validatePassword(password) === false) {
        const error = new Error("La contraseña no cumple los requisitos.");
        error.status = 400;
        throw error;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await createUser({
        name,
        badge: badgeToRegister,
        role: newUserBadge.role,
        passwordHash
    });

    return newUser;
}

async function loginUser({ badge, password }) {

    if (typeof badge !== "string" || typeof password !== "string") {
        const error = new Error("Formato de placa o contraseña no válido.");
        error.status = 400;
        throw error;
    }

    if (badge.trim() === "" || password === "") {
        const error = new Error("La placa y la contraseña son obligatorias.");
        error.status = 400;
        throw error;
    }

    const user = await findUserByBadge(badge.trim());

    if (!user) {
        const error = new Error("Credenciales incorrectas.");
        error.status = 401;
        throw error;
    }

    const correctPassword = await bcrypt.compare(password, user.passwordHash);

    if (!correctPassword) {
        const error = new Error("Credenciales incorrectas.");
        error.status = 401;
        throw error;
    }

    const token = jwt.sign({
        userId: user._id.toString(),
        role: user.role
    },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return { user, token };
}

export {
    registerUser,
    loginUser
}