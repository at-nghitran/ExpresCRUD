var userModel = require('../models/user');
// var Users = mongoose.model('Users', User);

exports.createNewUser = function (req, res) {
  if (req) { 
    userModel.createUser(req.body, res);
  };
};

exports.getListUsers = function (req, res) {
  userModel.getListUser(req, res);
}

exports.getUserById = function (req, res) {
  userModel.getUserById(req.params.id, res);
}

exports.updateUser = function (req, res) {
  userModel.updateUser(req, res);
}

exports.deleteUser = function (req, res) {
  userModel.deleteUser(req, res);
}

exports.findUserByNameAndPhone = function (req, res) {
  userModel.findUserByNameAndPhone(req, res);
}