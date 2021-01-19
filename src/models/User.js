const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  refreshToken: {
    type: String,
    required: true,
    expiry: Date,
  },
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    const id = returnedObject._id;
    returnedObject.id = id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
    delete returnedObject.refreshToken;
  },
});

userSchema.pre('save', function (next) {
  if (this.isNew) {
    const saltRounds = 10;
    return bcrypt.hash(this.password, saltRounds, (_, hash) => {
      this.password = hash;
      return next();
    });
  }
  next();
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
