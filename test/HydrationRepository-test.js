const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
// const hydrationData = require('../data/hydration');
// const hydrationData = data.hydrationData;

describe('HydrationRepository', function() {
  let hydrationRepo;
  let hydrationData;

  beforeEach(() => {
    hydrationData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 47
      }
    ];

    hydrationRepo = new HydrationRepository(hydrationData);
  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should store a user\'s hydration data', function() {

    expect(hydrationRepo).to.deep.equal({hydrationData});
  });

  it('should store a user\'s hydration data', function() {
    expect(hydrationRepo.getUserData(2)).to.deep.equal([hydrationData[1]]);
  });

})
