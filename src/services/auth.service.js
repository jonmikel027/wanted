import bcrypt from "bcrypt";
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

export{
    registerUser
}