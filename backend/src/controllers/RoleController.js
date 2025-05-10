const roleModel = require('../models/RoleModel');

const addRole = async (req, res) => {
    try {
        const savedRole = await roleModel.create(req.body);
        res.json({
            message: "Role added",
            data: savedRole
        })
    } catch (error) {
        res.json({
            message: "Internal server error",
            data: error
        })
    }
}

const getAllRoles = async (req, res) => {
    try {
        const roles = await roleModel.find();
        res.json({
            message: "All roles",
            data: roles
        })
    } catch (error) {
        res.json({
            message: "Internal server error",
            data: error
        })
    }
}

module.exports = {
    addRole,
    getAllRoles
}