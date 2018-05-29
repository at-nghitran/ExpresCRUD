var userModel = require('../models/user');
// var Users = mongoose.model('Users', User);

module.exports.createNewUser = function (req, res) {
  if (req) { 
    userModel.createUser(req.body, res);
  };
};

module.exports.getListUsers = function (req, res) {
  userModel.getListUser(req, res);
}

module.exports.getUserById = function (req, res) {
  userModel.getUserById(req.params.id, res);
}

module.exports.updateUser = function (req, res) {
  userModel.updateUser(req, res);
}

module.exports.deleteUser = function (req, res) {
  userModel.deleteUser(req, res);
}

module.exports.findUserByNameAndPhone = function (req, res) {
  userModel.findUserByNameAndPhone(req, res);
}