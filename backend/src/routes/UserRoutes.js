//api express -->Router
//Router --> server req --> as it is --> controller 
//res --> controller ---> client

const router = require('express').Router();
const userController = require('../controllers/UserController');

// const testMiddleware = require('../middleware/TestMiddleware');
const zodMiddleware = require('../middleware/ZodMiddleware');
const userValidationSchema = require('../validationSchema/UserValidationSchema');

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById)
router.get('/usersbyname', userController.getUserByName)

router.post('/adduser', zodMiddleware(userValidationSchema), userController.addUser)

router.delete('/deleteuser/:id', userController.deleteUser)
router.put('/updateuser/:id', userController.updateUser)
router.put('/addhobby/:id', userController.addHobby)

router.post('/forgotpassword', userController.forgotpassword)
router.post("/resetpassword", userController.resetpassword)

module.exports = router;