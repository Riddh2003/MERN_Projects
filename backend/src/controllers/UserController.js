const userModel = require('../models/UserModel');
const mailSend = require('../utils/MailUtil');
const encryptUtil = require("../utils/EncryptUtil");
const tokenUtil = require("../utils/TokenUtil");

const getAllUsers = async (req, res) => {
    // console.log(req.user);
    const users = await userModel.find().populate({
        path: 'role',
        select: 'name'
    });
    if (users.length > 0) {
        res.json({
            message: "User Fetch.........",
            data: users
        })
    } else {
        res.json({
            message: "User Data not Found.....",
            data: []
        })
    }

}

const getUserById = async (req, res) => {
    const foundUser = await userModel.findById(req.params.id);
    if (foundUser) {
        res.json({
            message: "User Found",
            data: foundUser
        })
    } else {
        res.json({
            message: "User not Found",
            data: []
        })
    }
}

// const getUserByName = async (req, res) => {
//     const foundUsers = await userModel.find({ name: req.params.name });
//     if (foundUsers.length > 0) {
//         res.json({
//             message: "User Found",
//             data: foundUsers
//         })
//     } else {
//         res.json({
//             message: "User not Found",
//             data: []
//         })
//     }
// }

const getUserByName = async (req, res) => {
    const query = req.query
    console.log(query)
    const foundUsers = await userModel.find({ name: req.query.name });
    if (foundUsers.length > 0) {
        res.json({
            message: "User Found",
            data: foundUsers
        })
    } else {
        res.json({
            message: "User not Found",
            data: []
        })
    }
}

const addUser = async (req, res) => {
    try {
        req.body.password = encryptUtil.encryptPasswaord(req.body.password);
        const saveduser = await userModel.create(req.body)
        res.status(201).json({
            message: "User Successfully Add....",
            data: saveduser
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            data: error
        })
    }

}

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)
        if (user) {
            res.status(204).json({
                message: "User Deleted....",
                data: user
            })
        }
        else {
            res.status(404).json({
                message: "User not found for delete...",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error...",
            data: user
        })
    }
}

const updateUser = async (req, res) => {
    const userId = req.query.id;
    const bloodgroups = req.body.bloodgroups;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { bloodgroups: bloodgroups },
            { new: true }
        );
        if (updatedUser) {
            res.status(200).json({
                message: "file uploaded & user updated...",
                data: updatedUser
            })
        } else {
            res.status(404).json({
                message: "Internal server error"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            data: error
        })
    }
}

const addHobby = async (req, res) => {
    const userId = req.params.id;
    const sportName = req.body.sportName;
    const updatedUser = await userModel.findByIdAndUpdate(
        userId,
        {
            $push: { sports: sportName }
        },
        { new: true }
    );
    if (updatedUser) {
        res.status(200).json({
            message: "Hobby Added",
            data: updatedUser
        })
    } else {
        res.status(404).json({
            message: "User not found"
        })
    }
}

const forgotpassword = async (req, res) => {
    try {
        const email = await userModel.find({ email: req.body.email })
        if (email) {
            const mailResponse = await mailSend("riddhmodi2003@gmail.com", "Reset Password Url", `localhost:3000/user/resetpassword?email="${req.body.email}"`)
            res.status(201).json({
                message: "You got the email...",
                data: mailResponse
            })
        }
        else {
            res.status(403).json({
                message: "Email not found",
                data: []
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            data: err
        })
    }
}

const resetpassword = async (req, res) => {
    try {
        const email = req.query.email;
        console.log(email)
        const password = req.body.password;
        const user = await userModel.findOneAndUpdate(
            { email: email },
            { password: password }
        );
        if (user) {
            res.status(200).json({
                message: "Password updated",
                data: user
            })
        } else {
            res.status(403).json({
                message: "User not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            data: err
        })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    const userFromEmail = await userModel.findOne({ email: email });
    console.log(userFromEmail);

    if (userFromEmail) {
        // const token = tokenUtil.generateToken(userFromEmail.toObject());
        const token = tokenUtil.generateToken(userFromEmail._id);
        const refreshToken = tokenUtil.generateRefreshToken(userFromEmail._id);
        if (encryptUtil.comparePassword(password, userFromEmail.password)) {
            await userModel.findByIdAndUpdate(userFromEmail._id, { refreshToken: refreshToken });
            res.status(200).json({
                message: "user login successfully....",
                // data: userFromEmail,
                token: token,
                refreshToken: refreshToken
            })
        } else {
            res.status(401).json({
                message: "invalid password...",
            })
        }
    } else {
        res.status(404).json({
            message: "User not found...",
        })
    }
}

const logout = async (req, res) => {
    try {
        const foundUser = await userModel.findById(req.params.id);
        if (foundUser) {
            await userModel.findByIdAndUpdate(foundUser._id, { refreshToken: null });
            res.clearCookie('refreshToken', {
                httpOnly: true,
                sameSite: 'Strict'
            });
            res.status(200).json({ message: "Logged out successfully..." });
        }
        else {
            res.status(404).json({
                message: "User not found..."
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Internal server error..."
        })
    }

}

const generateAccessTokenFromRefreshToken = async (req, res) => {
    const token = req.body.refreshToken;
    if (token) {
        const userFromTokenFromDb = await userModel.findOne({ refreshToken: token });
        console.log(userFromTokenFromDb)
        if (userFromTokenFromDb) {
            const accessToken = tokenUtil.generateToken(userFromTokenFromDb._id)
            res.status(200).json({
                message: "Generate Access Token...",
                token: accessToken
            })
        }
        else {
            res.status(401).json({
                message: "not valid user..."
            })
        }
    }
    else {
        res.status(400).json({
            message: "Please pass the refresh token..."
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByName,
    addUser,
    deleteUser,
    updateUser,
    addHobby,
    forgotpassword,
    resetpassword,
    loginUser,
    logout,
    generateAccessTokenFromRefreshToken
}