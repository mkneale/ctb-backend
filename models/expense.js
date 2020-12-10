var mongoose = require('mongoose');
var ExpenseSchema = require('./expenseSchema');

var Expense = mongoose.model('Expenses', ExpenseSchema);

module.exports = Expense;
