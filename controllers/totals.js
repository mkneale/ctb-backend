var Spend = require('../models/spend');

var TotalsController = {

Index: async function(req, res) {
    let getSpend = await getTotalSpendThisPeriod();
    res.json({  totalSpendThisPeriod: getSpend,
                totalMoneyLeft: 0,
                totalTimeTillPayday: 0,
                totalMoneyLeftPerDay: 0,
                totalsPerCategory: [ ]
            });
  }
}

const getTotalArrayPromise = () => {
    return new Promise((resolve, reject) => {
        Spend.find(function(err, spends) {
            if (err) { 
                reject (err)
                return
            }
        resolve(spends)
        })
    })
}   

const getTotalSpendThisPeriod = async () => {
    var data = await getTotalArrayPromise();
    let total = 0;
        data.forEach(spend => {
            total += spend.itemCost;
        });
        return total;
  }

module.exports = TotalsController;