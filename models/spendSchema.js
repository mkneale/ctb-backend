var mongoose = require('mongoose');

var SpendSchema = new mongoose.Schema({
  userId: {
    type: String
  },

  dateLogged: {
    type: Date,
    default: Date.now
  },

  dateSpent: {
    type: Date,
    default: Date.now
  },

  itemSpent: {
    type: String,
    required: true
  },

  itemCat: {
    type: String,
    default: "none"
  },

  itemCost: {
    type: Number,
    required: true
  }


});

module.exports = SpendSchema;
