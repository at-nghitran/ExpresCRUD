var userModel = require('../models/user');

exports.createNewUser = function (req, res) {
    userModel.createUser(req.body, function (err, user) {
      if (err) throw err;
      res.status(200).send(user);
    })
};

exports.getListUsers = function (req, res) {
  userModel.getListUser({}, function (err, data) {
    if (err) throw err;
    res.status(200).send(data);
  });
}

exports.getUserById = function (req, res) {
  userModel.getUserById(req.params.id, function (err, user) {
    if (err) throw err;
    res.status(200).send(user);
  })
}

exports.updateUser = function (req, res) {
  userModel.updateUser(req.params.id, req.body, function (err, user) {
    if (err) throw err;
    res.status(200).send(user);
  });
}

exports.deleteUser = function (req, res) {
  userModel.deleteUser(req.params.id, function (err, usr) {
    if (err) throw err;
    res.status(200).send(usr);
  });
}

exports.findUserByNameAndPhone = function (req, res) {
  userModel.findUserByNameAndPhone(req.params.name, req.params.phone, function (err, data) {
    if (err) throw err;
    res.status(200).send(data);
  });
}
