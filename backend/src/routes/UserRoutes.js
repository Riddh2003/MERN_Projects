//api express -->Router
//Router --> server req --> as it is --> controller 
//res --> controller ---> client

const router = require('express').Router();
const userController = require('../controllers/UserController');

// const testMiddleware = require('../middleware/TestMiddleware');
const zodMiddleware = require('../middleware/ZodMiddleware');
const userValidationSchema = require('../validationSchema/UserValidationSchema');
const multerMiddleware = require('../middleware/MulterMiddleware');
// const validateToken = require("../middleware/AuthMiddleware");

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.get('/usersbyname', userController.getUserByName);

router.post('/adduser', zodMiddleware(userValidationSchema), userController.addUser);
router.post('/generateaccesstoken', userController.generateAccessTokenFromRefreshToken);

router.delete('/deleteuser/:id', userController.deleteUser);
router.put('/updateuser', multerMiddleware.multipleFileUpload, userController.updateUser);
router.put('/addhobby/:id', userController.addHobby);

router.post('/forgotpassword', userController.forgotpassword);
router.post('/resetpassword', userController.resetpassword);
router.post('/login', userController.loginUser);
router.put('/logout/:id', userController.logout);

module.exports = router;