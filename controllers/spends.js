var Spend = require('../models/spend');

var SpendsController = {
  New: function(req, res) {
    var spend = new Spend({
      userId: req.body.userId,
      dateSpent: req.body.dateSpent,
      itemSpent: req.body.itemSpent,
      itemCat: req.body.itemCat,
      itemCost: req.body.itemCost
    });
    spend.save(function(err) {
      if (err) { throw err; }
    });
    res.json({spend: spend});
  },

  Index: function(req, res) {

    Spend.find(function(err, spends) {
      if (err) { throw err; }

      res.json({spends: spends});
    });
  },

  FindbyUser: function(req, res) {
    const userId = req.params.userId;

    Spend.find({userId: userId}, function(err, spends) {
      if (err) { throw err; }

      res.json({spends: spends});
    });
  },
  FindbyUserThisMonth: function(req, res) {
    const userId = req.params.userId;
    const date = new Date();
    const y = date.getFullYear();
    const m = new Date().getMonth();
    Spend.find({userId: userId, dateSpent: {$gte: new Date(y, m, 1), $lte: new Date(y, m + 1, 0)}}, function(err, spends) {
      if (err) { throw err; }

      res.json({spends: spends});
    });
  },
  Delete: function(req, res) {
    const spendId = req.params.spendId;

    Spend.findByIdAndDelete(spendId, function (err, spend) {
      if (err) { throw err;}

    res.json({deleted: spend});
    });
  },

  Patch: function(req, res) {
    const spendId = req.params.spendId;
    var dateSpent = req.body.dateSpent;
    var itemSpent = req.body.itemSpent;
    var itemCat = req.body.itemCat;
    var itemCost = req.body.itemCost;

   Spend.findByIdAndUpdate({_id: spendId},
     {dateSpent: dateSpent,
      itemSpent: itemSpent, itemCat:itemCat, itemCost: itemCost},
       function (err, spend) {
     if (err) { throw err;}
     res.json({updated: spend})

   })

  },
  Find: function(req, res) {
    var spendId = req.params.spendId;
    Spend.findById(spendId, function(err, spends) {
      if (err) { throw err; }

      res.json(spends);
    });
  }



}

module.exports = SpendsController;
