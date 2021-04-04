const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');
<<<<<<< Updated upstream
const UserSleep = require('../src/UserSleep');
=======
const sleepData = require('../data/sleep.js');
>>>>>>> Stashed changes

describe('SleepRepository', function() {
  let sleepRepo;
  let sleepData;

  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.6
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "hoursSlept": 9.6,
        "sleepQuality": 2.9
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 5.1,
        "sleepQuality": 2.6
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 8.1,
        "sleepQuality": 3.5
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "hoursSlept": 8.9,
        "sleepQuality": 3.2
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 4.4,
        "sleepQuality": 1.6
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 4.9,
        "sleepQuality": 3.9
      },
      {
        "userID": 3,
        "date": "2019/06/18",
        "hoursSlept": 8,
        "sleepQuality": 3.4
      }
    ];

    sleepRepo = new SleepRepository(sleepData);
  });

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of the SleepRepository class', function() {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepository);
  });

  it('should calculate average sleep quality', function() {
    expect(sleepRepo.getUserData(1)).to.deep.equal([
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 5.1,
        "sleepQuality": 2.6
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 4.4,
        "sleepQuality": 1.6
      }
    ]);
  });

<<<<<<< Updated upstream
  it('should calculate average sleep quality', function() {
    expect(sleepRepo.calcAvgSleepQuality()).to.equal(3.0777777777777775);
  });

  it('should be able to find all users with sleep quality over 3 for a given week', function() {
    expect(sleepRepo.calcQualityLeaders("2019/06/18")).to.deep.equal([
      {
        "avgQuality": 3.1666666666666665,
        "id": 3
      },
      {
        "avgQuality": 3.6666666666666665,
        "id": 2
      }
    ]);
=======
  it.only('should be able to find top sleepers in a given week', function() {
    console.log(sleepRepo.calcQualityLeaders("2019/06/15", sleepData));

    expect(sleepRepo.calcQualityLeaders("2019/06/15", sleepData)).to.deep.equal([2, 3]);
>>>>>>> Stashed changes
  });

  it('should find the users who slept the most number of hours', function() {
    expect(sleepRepo.findTopSleeper("2019/06/18")).to.deep.equal([
      { userID: 3,
        date: '2019/06/16',
        hoursSlept: 9.6,
        sleepQuality: 2.9
      }]);
  });

})
