const { TestScheduler } = require('jest');
var mongoose = require('mongoose');

require('./mongodb_helper')
const Expense = require('../models/expense');

describe('ExpenseSchema', function() {
  beforeEach(function(done) {
      mongoose.connection.collections.expense.drop(function() {
          done();
      });
  });

  it('has an expense', function(){
    var expense = new Expense({
      expense: 'Doggo',
      expenseCat: 'Pet',
      expenseCost: 5
    });
    expect(expense.expense).toEqual('Doggo');
    expect(expense.expenseCat).toEqual('Pet');
    expect(expense.expenseCost).toEqual(5);
  })


})
