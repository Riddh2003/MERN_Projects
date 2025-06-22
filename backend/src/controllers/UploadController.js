const multer = require("multer");
const userModel = require('../models/UserModel');

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    destination: "./uploads"
})

//single file upload
// const upload = multer({
//     storage: storage,
//     filefilter: (req, file, cb) => {
//         if (file.mimetype.startWith('image/')) {
//             cb(null, true);
//         }
//         else {
//             cb(new Error('Only image files are allowed!'), false);
//         }
//     },
//     //limits:bytes...
//     limits: {
//         fieldSize: 10 * 1024 * 1024 // 10MB limits
//     }
// }).single("file");

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

//single file upload endpoint
const uploadFile = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(500).json({
                message: err
            })
        }
        else {
            //file path store to database

            console.log(req.body);
            res.status(201).json({
                message: "file uploaded successfully...",
                data: req.file
            })
        }
    })
}

//Muiltiple files upload endpoint
const multipleFileUpload = async (req, res) => {
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
            const profileUrls = req.files.map(file => `/uploads/${file.filename}`);
            const updateuser = await userModel.findByIdAndUpdate(userId, { profileUrl: profileUrls }, { new: true });
            if (!updateuser) {
                res.status(404).json({
                    message: "User not found..."
                })
            }
            res.status(201).json({
                message: "file uploaded and user updated...",
                files: req.files,
                profileUrl: profileUrl,
                user: updateuser
            })
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
    uploadFile,
    multipleFileUpload
}