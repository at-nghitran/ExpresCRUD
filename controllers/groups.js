var groupModel = require('../models/group');
// var Users = mongoose.model('Users', User);

exports.createNewGroup = function (req, res) {
  groupModel.createUser(req.body, function (err, user) {
    if (err) throw err;
    res.status(200).send(user);
  })
};

exports.getListGroup = function (req, res) {
  groupModel.getListUser({}, function (err, data) {
    if (err) throw err;
    res.status(200).send(data);
  });
}

exports.getGroupById = function (req, res) {
  groupModel.getUserById(req.params.id, function (err, user) {
    if (err) throw err;
    res.status(200).send(user);
  })
}

exports.updateGroup = function (req, res) {
  groupModel.updateUser(req.params.id, req.body, function (err, user) {
    if (err) throw err;
    res.status(200).send(user);
  });
}

exports.deleteGroup = function (req, res) {
  groupModel.deleteUser(req.params.id, function (err, usr) {
    if (err) throw err;
    res.status(200).send(usr);
  });
}

exports.queryGroup = function (req, res){
  groupModel.queryGroup({}, function (err, usr) {
    if (err) throw err;
    res.status(200).send(usr);
  });
}
