const mongoose = require ('mongoose');
const validator = require('validator');


let User = mongoose.model('User',{
  email:{
    type:String,
    required: true,
    minlength: 1,
    trim: true,
    unique:true,
    validate: {
      validator: validator.isEmail,
      message: `{value} is not a valid email`
    }
  },
  password:{
    type:String,
    required:true,
    minlength: 6
  },
  tokens:[{
    access:{
        type:String,
        required:true
    },
    token:{
      type:String,
      required:true
    }
  }]
});

module.exports = {User};
