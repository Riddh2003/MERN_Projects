const multer = require("multer");

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
    upload(req, res, (err) => {
        if (err) {
            res.status(500).json({
                message: err
            })
        }
        else {
            if (!req.files || req.files.length === 0) {
                res.status(400).json({
                    error: "No files uploaded."
                })
            }
            else {
                res.status(201).json({
                    files: req.files
                })
            }
        }
    })
}

module.exports = {
    uploadFile,
    multipleFileUpload
}