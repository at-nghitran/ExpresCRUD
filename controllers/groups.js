var groupModel = require('../models/group');
// var Users = mongoose.model('Users', User);

module.exports.createNewGroup = function (req, res) {
  groupModel.createGroup(req, res);
};

module.exports.getListGroup = function (req, res) {
  groupModel.getListGroup(req, res);
}

module.exports.getGroupById = function (req, res) {
  groupModel.getGroupById(req, res);
}

module.exports.updateGroup = function (req, res) {
  groupModel.updateGroup(req, res);
}

module.exports.deleteGroup = function (req, res) {
  groupModel.deleteGroup(req, res);
}
