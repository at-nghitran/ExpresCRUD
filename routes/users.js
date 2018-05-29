var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');
var groupController = require('../controllers/groups');

/* API User */
router.post('/', userController.createNewUser);
router.get('/', userController.getListUsers);
router.get('/:id', userController.getUserById);
router.put('/:id/edit', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:name/:phone', userController.findUserByNameAndPhone);

module.exports = router;
