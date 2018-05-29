var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');
var groupController = require('../controllers/groups');

/* API User */
router.post('/', userController.createNewUser);
router.get('/', userController.getListUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:name/:phone', userController.findUserByNameAndPhone);

/* Api Group */
router.post('/', groupController.createNewGroup);
router.get('/', groupController.getListGroup);
router.get('/:id', groupController.getGroupById);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

module.exports = router;
