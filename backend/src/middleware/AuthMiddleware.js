const jwt = require("jsonwebtoken");
const SECRET = 'modi';
const userModel = require("../models/UserModel");
const generateToken = require("../utils/TokenUtil");

const validateToken = async (req, res, next) => {
    var token = req.headers.authorization;
    if (token) {
        if (token.startsWith("Bearer ")) {
            token = token.split(" ")[1];
            try {
                // const user = jwt.verify(token, SECRET);
                const userId = jwt.verify(token, SECRET);
                // console.log(userId)
                const userIdFromDb = await userModel.findById(userId.id);
                if (userIdFromDb) {
                    // console.log(userIdFromDb);
                    req.user = userIdFromDb;
                    next()
                }
                else {
                    res.status(402).json({
                        message: "unauthorized user..."
                    })
                }
            } catch (err) {

                const refreshToken = req.cookie?.refreshToken;
                if (!refreshToken) {
                    return res.status(401).json({ message: "No refresh token. Login again." });
                }

                try {
                    const decodedRefresh = jwt.verify(refreshToken, SECRET);
                    const user = await userModel.findById(decodedRefresh.id);
                    if (!user || user.refreshToken !== refreshToken) {
                        return res.status(401).json({ message: "Refresh token invalid...." });
                    }

                    const newAccessToken = generateToken(user._id);
                    res.setHeader('x-access-token', newAccessToken);
                    req.user = user;
                    next();
                } catch (err) {
                    return res.status(401).json({
                        message: "Refresh token expired. Login again..."
                    })
                }

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