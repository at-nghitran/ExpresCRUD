var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var ObjectID = require('mongodb').ObjectID;

var db = mongoose.connection;

var User = new mongoose.Schema({
  name: {
    type: String
  },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  phone: {
    type: String
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
});

var Users = mongoose.model('Users', User);

exports.createUser = function (req, res) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.password, salt);
  var User = new Users({
    name: req.name,
    password: hash ? hash : '',
    phone: req.phone,
    age: req.age
  });
  User.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

exports.getListUser = function (req, res) {
  Users.find({}, function (err, users) {
    res.send(users);
  });
};

exports.getUserById = function (req, res) {
  Users.findById(req).then(data => {
    res.send('success: ' + data);
  })
    .catch(err => res.send(err));
};

exports.updateUser = function (req, res) {

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  Users.update({ _id: ObjectID(req.params.id) },
    {
      name: req.body.name,
      age: req.body.age,
      password: hash ? hash : req.body.password,
      phone: req.body.phone
    }, function (err, result) {
      if (err) res.send(err);
      res.send(result.nModified + " document(s) updated");
    });
};

exports.deleteUser = function (req, res) {
  Users.remove({ "_id": ObjectID(req.params.id) }, function (err, docs) {  //db.users.remove({"_id": ObjectId("4d512b45cc9374271b02ec4f")});
    if (err) res.send(err);
    res.send("User deleted");
  });
};

exports.findUserByNameAndPhone = function (req, res) {
  Users.find( {$and: [{ name: req.params.name} , {phone: req.params.phone }] }, function (err, users) {
    if (err) res.send(err);
    if (users.length > 0) {
      res.send(users);
    } else {
      res.send('Not user found !!!');
    }
  })
};

