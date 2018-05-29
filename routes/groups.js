var express = require('express');
var router = express.Router();
var groupController = require('../controllers/groups');

/* Api Group */
router.post('/', groupController.createNewGroup);
router.get('/', groupController.getListGroup);
router.get('/:id', groupController.getGroupById);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

module.exports = router;