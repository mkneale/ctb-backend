var express = require('express');
var router = express.Router();
var Totals = require('../lib/Totals');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//var totals = new Totals;
// console.log(Totals.getTotalSpendThisPeriod);
// Totals.getTotalSpendThisPeriod;

module.exports = router;
