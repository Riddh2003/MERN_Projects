const routes = require('express').Router();
const uploadController = require("../controllers/UploadController")

routes.post('/file', uploadController.uploadFile)
routes.post('/files', uploadController.multipleFileUpload)

module.exports = routes