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
    type: Number
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
});

var Users = mongoose.model('Users', User);

exports.createUser = function (user, callback) {
  var User = new Users(user);

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  User.password = hash;
  User.save(callback);
};

exports.getListUser = function ({}, callback) {
  Users.find({}, callback);
};

exports.getUserById = function (id, callback) {
  Users.findOne({ _id: id }).exec(callback);
};

exports.updateUser = function (id, update, callback) {

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(update.password, salt);
  update.password = hash;

  Users.findByIdAndUpdate(id, update, callback);
};

exports.deleteUser = function (id, callback) {
  Users.findByIdAndRemove(id, callback);
};

exports.findUserByNameAndPhone = function (pname, pphone, callback) {
  Users.find( { $and: [{ name: pname} , { phone: pphone }] }, callback)
};

