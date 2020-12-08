var mongoose = require('mongoose');

require('../mongodb_helper')
var Spend = require('../../models/spend');

describe('Spend model', function() {
  beforeEach(function(done) {
      mongoose.connection.collections.spends.drop(function() {
          done();
      });
  });

  it('has a spend', function() {
    var spend = new Spend({ itemSpent: 'Test Oleg', itemCat: 'Meerkat', itemCost: 13.49, dateSpent: new Date(1995, 11, 17) });
    expect(spend.itemSpent).toEqual('Test Oleg');
    expect(spend.itemCat).toEqual('Meerkat');
    expect(spend.itemCost).toEqual(13.49);
    expect(spend.dateSpent).toEqual(new Date(1995, 11, 17));
  });

  it('returns all the records', function(done) {
    Spend.find(function(error, spends) {
      expect(error).toBeNull();
      expect(spends).toEqual([]);
      done();
    })
  })

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

  it('can delete a spend', function(done) {
    var spend = new Spend({ itemSpent: 'Test Sergei', itemCat: 'Meerkat', itemCost: 15.99, dateSpent: new Date(1990, 12, 15) });

    spend.save(function(err) {
      expect(err).toBeNull();

      Spend.deleteOne(spend,function(err, spends) {
        expect(err).toBeNull();

        expect(spends).toMatchObject({"deletedCount": 1, "n": 1, "ok": 1});
        done();
      });
    });
 });
});
