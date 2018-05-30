var groupModel = require('../models/group');
// var Users = mongoose.model('Users', User);

exports.createNewGroup = function (req, res) {
  groupModel.createGroup(req, res);
};

exports.getListGroup = function (req, res) {
  groupModel.getListGroup(req, res);
}

exports.getGroupById = function (req, res) {
  groupModel.getGroupById(req, res);
}

exports.updateGroup = function (req, res) {
  groupModel.updateGroup(req, res);
}

exports.deleteGroup = function (req, res) {
  groupModel.deleteGroup(req, res);
}
