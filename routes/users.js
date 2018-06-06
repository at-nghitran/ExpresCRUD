var express = require('express');
var router = express.Router();
var validation = require('express-validation');
var UserValidate = require('./../lib/customvalidations'); 
var userController = require('../controllers/users');

/* API User */
router.post('/', validation(UserValidate.create), userController.createNewUser);
router.get('/', userController.getListUsers);
router.get('/:id', userController.getUserById);
router.put('/:id/edit', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:name/:phone', userController.findUserByNameAndPhone);

module.exports = router;
