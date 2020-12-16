var Spend = require('../models/spend');
var Total =require('../models/total')
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
      let salary = await Total.find({userId: userID}, function(err, salary) {
        if (err) { throw err; };
      });
    let getSpend = await getTotalSpendThisPeriodByUser(userID);
    res.json({  totalSpendThisPeriod: getSpend.toFixed(2),
                totalMoneyLeft: 0,
                salary: salary[0].salary,
                totalTimeTillPayday: 0,
                totalMoneyLeftPerDay: 0,
                totalsPerCategory: [ ]
            });
  },
  PostSalary: function(req, res){
    var salary = new Total({
      userId: req.params.userId,
      salary: req.body.salary
    });
    salary.save(function(err) {
      if (err) { throw err; }
    });
    res.json({salary: salary});
  },
  GetSalary: function(req, res) {
    const userId = req.params.userId;

    Total.find({userId: userId}, function(err, salary) {
      if (err) { throw err; }

      res.json({salary: salary});
    });
  },
  PatchSalary: async function(req, res){
    try{
    const userId = req.params.userId;
    const updatedSalary = await Total.updateOne({userId: userId},
                      {$set: {userId: userId,
                              salary: req.body.salary}});
    res.json(updatedSalary);
  } catch(err) {
    res.json({message: err})
  }; }

} // ends TotalsController

const getTotalArrayByUserPromise = (userID) => {
    return new Promise((resolve, reject) => {
        const date = new Date();
        const y = date.getFullYear();
        const m = new Date().getMonth();
        Spend.find({userId: userID, dateSpent: {$gte: new Date(y, m, 1), $lte: new Date(y, m + 1, 0)}}, function(err, spends) {
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
