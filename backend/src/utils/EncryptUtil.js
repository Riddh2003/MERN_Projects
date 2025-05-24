const bcrypt = require("bcrypt")

const encryptPasswaord = (password) => {
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

const comparePassword = (plainPass, hashedPass) => {
    if (!plainPass || !hashedPass) {
        throw new Error("Both plain password and hashed password are required");
    }
    return bcrypt.compareSync(plainPass, hashedPass);
}

module.exports = {
    encryptPasswaord,
    comparePassword,
}