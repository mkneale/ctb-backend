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

  Update: async function(req, res) {
    try{const updatedExpense = await Expense.updateOne({_id: req.params.expenseId},
                                                        {$set: {expense: req.body.expense,
                                                        expenseDate: req.body.expenseDate,
                                                        expenseCost: req.body.expenseCost,
                                                        expenseCat: req.body.expenseCat}});
    res.json(updatedExpense);
  } catch(err) {
    res.json({message: err})
  };
},

Total: async function(req, res) {
    let getExpense = await getTotalExpensesThisPeriod();
    res.json({  totalExpenseThisPeriod: getExpense.toFixed(2),
                totalMoneyLeft: 0,
                totalTimeTillPayday: 0,
                totalMoneyLeftPerDay: 0,
                totalsPerCategory: [ ]
            });


}

};

const getTotalArrayPromise = () => {
    return new Promise((resolve, reject) => {
        Expense.find(function(err, expenses) {
            if (err) {
                reject (err)
                return
            }
        resolve(expenses)
        })
    })
};

const getTotalExpensesThisPeriod = async () => {
    var data = await getTotalArrayPromise();
    let total = 0;
        data.forEach(expense => {
            total += expense.expenseCost;
        });
        return total;
  };


module.exports = ExpenseController;
