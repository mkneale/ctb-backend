var Expense = require('../models/expense');

var ExpenseController = {
  New: function(req, res) {
    var expense = new Expense({
      userId: req.body.userId,
      expenseDate: req.body.expenseDate,
      expense: req.body.expense,
      expenseCat: req.body.expenseCat,
      expenseCost: req.body.expenseCost
    });
    expense.save(function(err) {
      if (err) { throw err; }
    });
    res.json({expense: expense});
  },

  Index: function(req, res) {

    Expense.find(function(err, expense) {
      if (err) { throw err; }

      res.json({expense: expense});
    });
  },

  Delete: function(req, res) {
    const expenseId = req.params.expenseId;

    Expense.findByIdAndDelete(expenseId, function (err, expense) {
      if (err) { throw err;}

    res.json({deleted: expense});
    });
  },

}

module.exports = ExpenseController;
