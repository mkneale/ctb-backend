var mongoose = require('mongoose');
var SpendSchema = require('./spendSchema');

var Spend = mongoose.model('Spend', SpendSchema);

module.exports = Spend;
