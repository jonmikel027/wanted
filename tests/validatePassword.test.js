import { test, expect } from "vitest";
import { validatePassword } from "../src/utils/validatePassword.js";

test("aceptar una contraseña: cumple todas las reglas", () => {
    const result = validatePassword("Wanted123!");

    expect(result).toBe(true);
});

test("rechazar contraseña: falta mayúscula", () => {
    const result = validatePassword("wanted123!");

    expect(result).toBe(false);
});

test("rechazar contraseña: falta número", () => {
    const result = validatePassword("mostWanted!");

    expect(result).toBe(false);
});

test("rechazar constraseña: falta carácter especial", () => {
    const result = validatePassword("Wanted123");

    expect(result).toBe(false);
});

test("rechazar contraseña: muy corta", () => {
    const result = validatePassword("Wan1!");

    expect(result).toBe(false);
});

test("rechazar contraseña: no es texto", () => {
    const result = validatePassword(undefined);

    expect(result).toBe(false);
});