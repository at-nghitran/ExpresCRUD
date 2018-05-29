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

module.exports.createGroup = function (req, res) {
  var Group = new Groups({
    name_group: req.body.name_group,
    note: req.body.note
  });
  Group.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
      });
    });
};

module.exports.getListGroup = function (req, res) {
  Groups.find({}, function (err, groups) {
    if (err) res.send(err);
    res.send(groups);
  });
};

module.exports.getGroupById = function (req, res) {
  Groups.findById(req.params.id).then(data => {
    res.send('success: ' + data);
  })
    .catch(err => res.send(err));
};

module.exports.updateGroup = function (req, res) {

  Groups.update({ _id: ObjectID(req.params.id) },
    {
      name_group: req.body.name_group,
      note: req.body.note
    }, function (err, result) {
      if (err) res.send(err);
      res.send(result.nModified + " document(s) updated");
    });
};

module.exports.deleteGroup = function (req, res) {
  Groups.remove({ "_id": ObjectID(req.params.id) }, function (err, docs) {  //db.users.remove({"_id": ObjectId("4d512b45cc9374271b02ec4f")});
    if (err) res.send(err);
    res.send("User deleted");
  });
};