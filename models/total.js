var mongoose = require('mongoose');
var TotalSchema = require('./totalSchema');

var Total = mongoose.model('Total', TotalSchema);

module.exports = Total;
