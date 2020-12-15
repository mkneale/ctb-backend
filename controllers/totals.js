var Spend = require('../models/spend');

var TotalsController = {

Index: async function(req, res) {
    let getSpend = await getTotalSpendThisPeriod();
    res.json({  totalSpendThisPeriod: getSpend.toFixed(2),
                totalMoneyLeft: 0,
                salary: 2300,
                totalTimeTillPayday: 0,
                totalMoneyLeftPerDay: 0,
                totalsPerCategory: [ ]
            });
  },
  Find: async function(req, res) {
      const userID = req.params.userId;
    let getSpend = await getTotalSpendThisPeriodByUser(userID);
    res.json({  totalSpendThisPeriod: getSpend.toFixed(2),
                totalMoneyLeft: 0,
                salary: 2300,
                totalTimeTillPayday: 0,
                totalMoneyLeftPerDay: 0,
                totalsPerCategory: [ ]
            });
  }

} // ends TotalsController

const getTotalArrayByUserPromise = (userID) => {
    return new Promise((resolve, reject) => {
        Spend.find({userId: userID}, function(err, spends) {
            if (err) {
                reject (err)
                return
            }
        resolve(spends)
        })
    })
}

const getTotalSpendThisPeriodByUser = async (userID) => {
    var data = await getTotalArrayByUserPromise(userID);
    let total = 0;
        data.forEach(spend => {
            total += spend.itemCost;
        });
        return total;
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
