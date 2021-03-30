const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const hydrationData = require('../data/hydration');
// const hydrationData = data.hydrationData;

describe('HydrationRepository', function() {
  let hydrationRepo;

  beforeEach(() => {
    hydrationRepo = new HydrationRepository(hydrationData);
    // hydrationData = [
    //   {
    //     "userID": 1,
    //     "date": "2019/06/15",
    //     "numOunces": 37
    //   },
    //   {
    //     "userID": 2,
    //     "date": "2019/06/15",
    //     "numOunces": 75
    //   },
    //   {
    //     "userID": 3,
    //     "date": "2019/06/15",
    //     "numOunces": 47
    //   }];

  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  // it('should store a user\'s hydration data', function() {
  //   const hydrationRepo = new HydrationRepository(userHydrationData);
  //
  //   console.log(hydrationRepo, "----- hydrationRepo");
  //   console.log(userHydrationData, "----- hydrationArray");
  //   expect(hydrationRepo).to.deep.equal(userHydrationData);
  // });

  it('should get user data by id', function() {
    console.log(hydrationRepo.getUserData(3));
    expect().to.equal();
  });

})
