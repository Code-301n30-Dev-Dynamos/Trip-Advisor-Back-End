'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
  name: String,
  email: String,
  parkName: String,
  notes: String
});

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;



