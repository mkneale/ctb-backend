//var mongoose = require('mongoose');
//var Spend = require('../models/spend');


// const getTotalArrayPromise = () => {
//     return new Promise((resolve, reject) => {
//         Spend.find(function(err, spends) {
//             if (err) { 
//                 reject (err)
//                 return
//             }
//         resolve(spends)
//         })
//     })

// }   

// const getTotalSpendThisPeriod = async () => {
//     var data = await getTotalArrayPromise();
//     let total = 0;
//         data.forEach(spend => {
//             total += spend.itemCost;
//         });
//         return total;
//   }

//module.exports = getTotalSpendThisPeriod();