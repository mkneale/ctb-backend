var mongoose = require('mongoose');

var TotalSchema = new mongoose.Schema({
  userId: {
    type: String
  },
  salary: {
    type: Number,
    required: true
  }
});

 module.exports = TotalSchema;
