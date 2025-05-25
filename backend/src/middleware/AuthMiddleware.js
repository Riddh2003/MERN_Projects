const jwt = require("jsonwebtoken");
const SECRET = 'modi';

const validateToken = (req, res, next) => {
    var token = req.headers.authorization;
    if (token) {
        if (token.startsWith("Bearer ")) {
            token = token.split(" ")[1];
            try {
                const user = jwt.verify(token, SECRET);
                // console.log(user);
                next()
            } catch (err) {
                res.status(401).json({
                    message: "Invaild...",
                    err: err,
                })
            }
        }
        else {
            res.status(401).json({
                message: "Token is not Bearer token..."
            })
        }
    } else {
        res.status(401).json({
            message: "Token is not present...",
        })
    }
}

module.exports = validateToken;