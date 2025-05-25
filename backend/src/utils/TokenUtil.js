const jwt = require("jsonwebtoken");
const SECRET = 'modi';

const generateToken = (object) => {
    return jwt.sign(object, SECRET, { expiresIn: 60 });
}

module.exports = {
    generateToken
}