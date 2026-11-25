import { registerUser } from "../services/auth.service.js";

async function postUser(req, res) {

    const newUserName = req.body.name;
    const newUserBadge = req.body.badge;
    const newUserPassword = req.body.password;

    const newUser = await registerUser({
        name: newUserName,
        badge: newUserBadge,
        password: newUserPassword
    });

    res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        badge: newUser.badge,
        role: newUser.role,
    });
}

export {
    postUser
}