const express = require('express');
const router = express.Router();
const roleController = require('../controllers/RoleController');

router.post('/addrole', roleController.addRole);
router.get('/getallrole', roleController.getAllRoles);

module.exports = router;
