var mongoose = require('mongoose');

require('./mongodb_helper')
var Totals = require('../lib/Totals');
var Spend = require('../models/spend');


describe('Total class', function() {

    beforeEach(function(done) {
        mongoose.connection.collections.spends.drop(function() {
            done();
        });
    });

    it('is a class instance', function() {
        var totals = new Totals();
        expect(totals).toBeInstanceOf(Totals);
    });

    it('can save a spend', function(done) {
        var spend = new Spend({ itemSpent: 'Test Sergei', itemCat: 'Meerkat', itemCost: 15.99, dateSpent: new Date(1990, 12, 15) });
        spend.save(function(error){
          expect(error).toBeNull();
        Spend.find(function(error, spends){
          expect(error).toBeNull();
          expect(spends[0]).toMatchObject({ itemSpent: 'Test Sergei', itemCat: 'Meerkat', itemCost: 15.99, dateSpent: new Date(1990, 12, 15) });
          done();
        })
        })
      })

   it('responds to getTotalSpendThisPeriod', function(done){
       var spend = new Spend({ itemSpent: 'Test Sergei', itemCat: 'Meerkat', itemCost: 15.99, dateSpent: new Date(1990, 12, 15) });
       spend.save();
       const total = new Totals();
       expect(total.getTotalSpendThisPeriod()).toEqual(15.99);


          //  console.log(totals.getTotalSpendThisPeriod());
        });

  //  });
    // it('responds to getTotalSpendThisPeriod', async () => {
    //     const spend = new Spend({ itemSpent: 'Test Sergei', itemCat: 'Meerkat', itemCost: 15.99, dateSpent: new Date(1990, 12, 15) });
    //     spend.save();
    //     var totals = new Totals();
    //     const data = await totals.getTotalSpendThisPeriod();
    //     expect(data).toBe([]);
    //   });


    // it('', function(){

    // })

});

// it(‘can save a post’, function(done) {
//     var post = new Post({ message: ‘some message’ });
//     post.save(function(err) {
//       expect(err).toBeNull();
//       Post.find(function(err, posts) {
//         expect(err).toBeNull();
//         expect(posts[0]).toMatchObject({ message: ‘some message’ });
//         done();
