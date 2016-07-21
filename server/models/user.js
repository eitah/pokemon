/* eslint-disable func-names, no-underscore-dangle */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String, required: true, minlength: 3, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 3 },
  pokemon: [{ type: mongoose.Schema.ObjectId, ref: 'Poke' }],
  dateCreated: { type: Date, default: Date.now },
});

schema.methods.token = function () {
  const subscriber = this._id;
  const expiration = (Date.now() / 1000) + 60; // time in seconds
  const secret = process.env.SECRET;
  return jwt.encode({ subscriber, expiration }, secret);
};


schema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

schema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model('User', schema);
