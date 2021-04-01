const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const UserHydration = require('../src/UserHydration');
//const hydrationData = require('../data/hydration');

describe('UserHydration', function() {
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
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 84
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numOunces": 39
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "numOunces": 75
      },
      {
        "userID": 1,
        "date": "2019/06/25",
        "numOunces": 51
      },
      {
        "userID": 1,
        "date": "2019/06/26",
        "numOunces": 100
      },
      {
        "userID": 1,
        "date": "2019/06/27",
        "numOunces": 30
      },
      {
        "userID": 1,
        "date": "2019/06/28",
        "numOunces": 98
      },
      {
        "userID": 1,
        "date": "2019/06/29",
        "numOunces": 85
      }];
     userHydration = new UserHydration(hydrationData);
  });

  it('should be a function', function() {
    expect(UserHydration).to.be.a('function');
  });

  it('should find a user\'s daily ounces', function() {
    expect(userHydration.findDailyOunces("2019/06/15")).to.equal(37);
  });

  it('should find a user\'s daily ounces for the entire week', function() {
    expect(userHydration.calcOuncesForWeek("2019/06/16")).to.deep.equal([75, 47, 85, 42, 87, 94, 84]);
  });

  it('should find the average of all the daily ounces', function (){
    expect(userHydration.calcAvgOunces()).to.equal(103.13333333333333);
  });
})
