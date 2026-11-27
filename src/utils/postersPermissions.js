function hasPosterPermissions(user, poster) {

    let permission = false;

    if (user.role === "admin" || user.userId === poster.createdBy.toString()) {
        permission = true;
        return permission;
    }

    return permission;
}

export { hasPosterPermissions };