//api express -->Router
//Router --> server req --> as it is --> controller 
//res --> controller ---> client

const router = require('express').Router();
const userController = require('../controllers/UserController');
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById)
router.get('/usersbyname', userController.getUserByName)
router.post('/adduser', userController.addUser)
router.delete('/deleteuser/:id', userController.deleteUser)
router.put('/updateuser/:id', userController.updateUser)
router.put('/addhobby/:id', userController.addHobby)
module.exports = router;