const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const Hydration = require('../src/HydrationClass');
const hydrationData = require('../data/hydration');

describe('Hydration', function() {
  let userHydration;
  let hydrationData;

  beforeEach(() => {
    hydrationData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 75
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 47
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 85
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 42
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 87
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 94
      }];

     userHydration = new Hydration(hydrationData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should find a user\'s daily ounces', function() {
    expect(userHydration.findDailyOunces(hydrationData, "2019/06/15")).to.equal(37);
  })

})
