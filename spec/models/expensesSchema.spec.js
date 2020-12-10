var mongoose = require('mongoose');

require('../mongodb_helper')
const Expense = require('../../models/expense');

describe('ExpenseSchema', function() {
  beforeEach(function(done) {
      mongoose.connection.collections.expenses.drop(function() {
          done();
      });
  });

  it('has an expense', function(){
    var expense = new Expense({
      expense: 'Doggo',
      expenseCat: 'Pet',
      expenseCost: 5,
      expenseDate: new Date(1995, 11, 17)
    });
    expect(expense.expense).toEqual('Doggo');
    expect(expense.expenseCat).toEqual('Pet');
    expect(expense.expenseCost).toEqual(5);
    expect(expense.userId).toEqual(undefined);
    expect(expense.expenseDate).toEqual(new Date(1995, 11, 17))
  });

  it('returns all the records', function(done) {
    Expense.find(function(error, expends) {
      expect(error).toBeNull();
      expect(expends).toEqual([]);
      done();
    })
  });

  it('can save an expense', function(done) {
    var expense = new Expense({
      expense: 'Doggo',
      expenseCat: 'Pet',
      expenseCost: 5,
      expenseDate: new Date(1995, 11, 17)
    });
    expense.save(function(error){
      expect(error).toBeNull();
    Expense.find(function(error, expends){
      expect(error).toBeNull();
      expect(expends[0]).toMatchObject({
        expense: 'Doggo',
        expenseCat: 'Pet',
        expenseCost: 5,
        expenseDate: new Date(1995, 11, 17)
      });
      done();
    })
    })
  });

  it('can delete an expense', function(done) {
    var expense = new Expense({
      expense: 'Doggo',
      expenseCat: 'Pet',
      expenseCost: 5,
      expenseDate: new Date(1995, 11, 17)
    });

    expense.save(function(err) {
      expect(err).toBeNull();

      Expense.deleteOne(expense,function(err, expends) {
        expect(err).toBeNull();

        expect(expends).toMatchObject({"deletedCount": 1, "n": 1, "ok": 1});
        done();
      });
    });
 });


})
