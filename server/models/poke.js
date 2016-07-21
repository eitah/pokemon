import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String },
  picURL: { type: String },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Poke', schema);
