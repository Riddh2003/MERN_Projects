const userModel = require('../models/UserModel');

const getAllUsers = async (req, res) => {

    const users = await userModel.find();

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


module.exports = {
    getAllUsers,
    getUserById,
    getUserByName,
    addUser,
    deleteUser
}