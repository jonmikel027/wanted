function validatePassword(password) {
    const minLength = 8; 
    const maxLength = null; 
    const requireNumber = true;
    const requireUppercase = true;
    const specialCharacters = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?¿¡";
    const requireSpecialCharacter = true;

    if (typeof password !== "string") {
        return false;
    }

    if (minLength !== null && password.length < minLength) {
        return false;
    }

    if (maxLength !== null && password.length > maxLength) {
        return false;
    }

    if (requireNumber && !/[0-9]/.test(password)) {
        return false;
    }

    if (requireUppercase && !/[A-Z]/.test(password)) {
        return false;
    }

    if (requireSpecialCharacter) {
        const specialCharacter = [...password].some((character) =>
            specialCharacters.includes(character)
        );

        if (!specialCharacter) {
            return false;
        }
    }

    return true;
}

export { validatePassword };