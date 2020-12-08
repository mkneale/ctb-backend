var mongoose = require('mongoose');
var Spend = require('../models/spend');

class Totals {

    constructor() {};

    getTotalSpendThisPeriod(){
        Spend.find(function(err, spends) {
            if (err) { throw err; }
            console.log(spends[0].itemCost);
            //res.json({spends: spends});

            return spends[0].itemCost
        });
    }
}

module.exports = Totals;
