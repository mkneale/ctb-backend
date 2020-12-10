const { TestScheduler } = require('jest');
var mongoose = require('mongoose');

require('./mongodb_helper')
const Totals = require('../lib/Totals');
const Spend = require('../models/spend');


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
  
    it('gives back the current total', function() {
      var totals = new Totals();
      expect(totals.getTotalSpendThisPeriod()).toBe(0)
    })

    test('the data is peanut butter', done => {
      function callback(data) {
        try {
          expect(data).toBe(0);
          done();
        } catch (error) {
          done(error);
        }
      }
      var totals = new Totals();
      const mockFind = jest
      .spyOn(Spend, 'find')
      .mockReturnValue([{
        itemSpent: 'Test Sergei', 
        itemCat: 'Meerkat', 
        itemCost: 15.99, 
        dateSpent: new Date(1990, 12, 15)
        }
      ])
      const expected = [{
        itemSpent: 'Test Sergei', 
        itemCat: 'Meerkat', 
        itemCost: 15.99, 
        dateSpent: new Date(1990, 12, 15)
        }
      ]
      totals.getTotalSpendThisPeriod(callback);
    });

    it('responds to getTotalSpendThisPeriod', async function() {
      
      var totals = new Totals();
 
      const mockFind = jest
      .spyOn(Spend, 'find')
      // .mockImplementation(
      //   [{
      //     itemSpent: 'Test Sergei', 
      //     itemCat: 'Meerkat', 
      //     itemCost: 15.99, 
      //     dateSpent: new Date(1990, 12, 15)
      //     }
      //   ]
      // )
      .mockReturnValue([{
        itemSpent: 'Test Sergei', 
        itemCat: 'Meerkat', 
        itemCost: 15.99, 
        dateSpent: new Date(1990, 12, 15)
        }
      ])
      const expected = [{
        itemSpent: 'Test Sergei', 
        itemCat: 'Meerkat', 
        itemCost: 15.99, 
        dateSpent: new Date(1990, 12, 15)
        }
      ]
    console.log(mockFind());
      const result = totals.getTotalSpendThisPeriod();
      
    
       
      await expect(totals.getTotalSpendThisPeriod()).toEqual(expected);
      //await expect(mockFind).toHaveBeenCalledTimes(3); 
     
        })
      

})
