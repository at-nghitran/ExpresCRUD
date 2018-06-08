var mongodb = require('mongodb');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

var schema = new mongoose.Schema({
  name_group: {
    type: String
  },
  note: {
    type: String
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
});


var Groups = mongoose.model('Groups', schema);

exports.createGroup = function (group, callback) {
  var Group = new Users(group);
  Group.save(callback);
};

exports.getGroupById = function (id, callback) {
  Groups.findOne({ _id: id }).exec(callback);
};

exports.updateUser = function (id, update, callback) {
  Groups.findByIdAndUpdate(id, update, callback);
};

exports.deleteUser = function (id, callback) {
  Groups.findByIdAndRemove(id, callback);
};

exports.queryGroup = function ({}, callback) {
  Groups.aggregate([
    { $project: {
      students: 1,
      total: 1
    } },
    {
      match: {
        total: { $sum: student },
      }
    }
  ]);
}
