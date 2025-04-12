//api express -->Router
//Router --> server req --> as it is --> controller 
//res --> controller ---> client

const router = require('express').Router();
const userController = require('../controllers/UserController');
router.get('/users', userController.getAllUsers);
module.exports = router;