const jwt = require("jsonwebtoken");
const SECRET = 'modi';

const generateToken = (userId) => {
    // return jwt.sign(object, SECRET, { expiresIn: 60 });
    return jwt.sign({ id: userId }, SECRET, { expiresIn: '1m' });
}

const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, SECRET, { expiresIn: '7d' });
}

module.exports = {
    generateToken,
    generateRefreshToken
}