const Joi = require('joi');

const customJoi = Joi.extend((joi) => ({
  base: joi.string(),
  name: 'userValidate',
  language: {
    empty: "Password can not empty!!",
    match: "Password not include name !!"
  },
  rules: [
    {
      name: 'passwordNotName',
      validate(params, value, state, options) {
        if (!state.parent.password) {
          return this.createError('userValidate.empty', {}, state, options);
        }

        return (state.parent.password.includes(state.parent.name) ? this.createError('userValidate.match', {}, state, options) : value); 
      },
    },
  ]
}));

module.exports = {
  //Create User
  create: {
    body: {
      name: Joi.string(),
      age: Joi.number().options({ convert: false }),
      phone: Joi.number().options({ convert: false }),
      password: customJoi.userValidate().passwordNotName()
    }
  }
}

