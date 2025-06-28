const multer = require('multer');
const userModel = require('../models/UserModel');
const mongoose = require('mongoose');
const cloudinaryUtil = require('../utils/CloudinaryUtil')

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    destination: "./uploads"
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only jpg file are allowed!'), false);
        }
    },
    // limits: {
    //     fieldSize: 10 * 1024 * 1024 //10MB file size
    // }
}).array('photos', 5);

const multipleFileUpload = async (req, res, next) => {
    upload(req, res, async (err) => {
        if (err) {
            res.status(500).json({
                message: err
            })
        }
        if (!req.files || req.files.length === 0) {
            res.status(400).json({
                error: "No files uploaded."
            })
        }
        try {
            const userId = req.query.id;
            const cloudinaryResponse = [];
            const uploadUrls = [];

            for (const file of req.files) {
                const cloudinaryData = await cloudinaryUtil.uploadOnCloudinary(file.path);
                console.log(cloudinaryData)
                uploadUrls.push(cloudinaryData.secure_url)
                cloudinaryResponse.push(cloudinaryData)
            }
            const updateuser = await userModel.findByIdAndUpdate(userId, {
                profileUrl: uploadUrls
            }, { new: true });
            if (!updateuser) {
                res.status(404).json({
                    message: "User not found..."
                })
            }
            next()
            // res.status(201).json({
            //     message: "file uploaded and user updated...",
            //     // files: req.files,
            //     profileUrl: uploadUrls,
            //     // user: updateuser,
            //     // cloudinaryResponse
            // })
        } catch (dberr) {
            console.error('Database update error : ', dberr);
            res.status(500).json({
                error: "Failed to update user...",
                data: dberr.message
            })
        }

    })
}

module.exports = {
    multipleFileUpload
}