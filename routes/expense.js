var express = require('express');
var router = express.Router();

var ExpenseController = require('../controllers/expenses');
router.get('/', ExpenseController.Index);
router.post('/', ExpenseController.New);
router.get('/user/:userId', ExpenseController.FindbyUser);
router.delete('/:expenseId', ExpenseController.Delete);
router.patch('/:expenseId', ExpenseController.Update);
router.get('/total', ExpenseController.Total);
router.get('/total/:userId', ExpenseController.TotalByUser);
module.exports = router;
