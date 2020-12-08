var mongoose = require('mongoose');
var Spend = require('../models/spend');

class Totals {


    async getTotalSpendThisPeriod(){
      let costs = await Spend.find(function(err, spends) {
            if (err) { throw err; }
            //res.json({spends: spends})
            return spends.map( spend => spend.itemCost).reduce((a, b) => a + b, 0);
            //console.log(spends.map( spend => spend.itemCost).reduce((a, b) => a + b, 0));
           });
           return costs;
    }
}

module.exports = Totals;
