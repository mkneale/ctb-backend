var mongoose = require('mongoose');

var ExpenseSchema = new mongoose.Schema({
  userId: {
    type: String
  },

  dateLogged: {
    type: Date,
    default: Date.now
  },

  expenseDate: {
    type: Date,
    default: Date.now
  },

  expense: {
    type: String,
    required: true
  },

  expenseCat: {
    type: String,
    default: "none"
  },

  expenseCost: {
    type: Number,
    required: true
  }


});

module.exports = ExpenseSchema;