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
});
