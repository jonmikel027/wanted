import { registerUser, loginUser } from "../services/auth.service.js";

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

async function postLogin(req, res) {

    const userBadge = req.body.badge;
    const userPassword = req.body.password;

    const { user, token } = await loginUser({
        badge: userBadge,
        password: userPassword
    });

    res.status(200).json({
        token,
        user: {
            _id: user._id,
            name: user.name,
            badge: user.badge,
            role: user.role
        }
    });
}

export {
    postUser,
    postLogin
};