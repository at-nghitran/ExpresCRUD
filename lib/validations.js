const Joi = require('joi');

exports.validationSchem = Joi.object({
  name: Joi.string(),
  password: Joi.string(),
  age: Joi.number().integer().options({ convert: false }),
  phone: Joi.number().integer().options({ convert: false })
});

exports.ValidateRq = function (value, validationSch, callback) {
  validationSch.validate(value, callback, { convert: true });
};

  // module.exports = validationRQ;
