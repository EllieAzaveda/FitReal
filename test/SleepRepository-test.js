const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', function() {
  let sleepRepo;
  let sleepData;

  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/07/18",
        "hoursSlept": 10.4,
        "sleepQuality": 3.1
      },
      {
        "userID": 2,
        "date": "2019/07/18",
        "hoursSlept": 10.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 3,
        "date": "2019/07/18",
        "hoursSlept": 9.8,
        "sleepQuality": 2.6
      }
    ];

    sleepRepo = new SleepRepository(sleepData);
  });

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be a function', function() {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepository);
  });

  it('should calculate average sleep quality', function() {
    expect(sleepRepo.calcAvgSleepQuality()).to.equal(5.25);
  });

  it('should be able to find top sleepers in a given week', function() {
  console.log(sleepRepo.calcQualityLeaders("2019/06/15"));

    expect().to.deep.equal();
  });

  it.skip('should be able to find top sleepers in a different week', function() {
    console.log(sleepRepo.calcQualityLeaders("2019/07/18"));

    expect().to.deep.equal();
  });

})
