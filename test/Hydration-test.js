const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const Hydration = require('../src/Hydration');

describe('Hydration', function() {
  let user1Hydration;
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
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 47
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 85
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 42
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 87
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 94
      }];

     user1Hydration = new Hydration(hydrationData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should find a user\'s daily ounces', function() {
    user1Hydration.findDailyOunces(hydrationData, "2021, 03, 29");

    expect(user1Hydration.numOunces).to.equal(60);
  })

})
