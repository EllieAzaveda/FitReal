const chai = require('chai');
const expect = chai.expect;

const UserSleep = require('../src/UserSleep');

describe('UserSleep', function() {
  let userSleep;
  let sleepData;

  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/14",
        "hoursSlept": 6.1,
        "sleepQuality": 2.9
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 7.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/07/19",
        "hoursSlept": 10.4,
        "sleepQuality": 3.1
      },
      {
        "userID": 1,
        "date": "2019/07/20",
        "hoursSlept": 10.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 1,
        "date": "2019/07/21",
        "hoursSlept": 9.8,
        "sleepQuality": 2.6
      },
    ];

    userSleep = new UserSleep(sleepData);
  });

  it('should be a function', function() {
    expect(UserSleep).to.be.a('function');
  });

  it('should be an instance of the UserSleep class', function() {
    expect(userSleep).to.be.an.instanceOf(UserSleep);
  });

  it('should be able to calculate a users average number of hours slept per day', function() {
    expect(userSleep.calcAvgTotalHrs()).to.equal(8.5125);
  });

  it('should be able to calculate a users average sleep quality per day over all time', function() {
    expect(userSleep.calcAvgTotalQuality()).to.equal(3.2);
  });

  it('should be able to find how many hours they slept for a specific day', function() {
    expect(userSleep.findDailyHrs("2019/06/14")).to.equal(6.1);
  });

  it('should be able to find their sleep quality for a specific day', function() {
    expect(userSleep.findDailyQuality("2019/06/14")).to.equal(2.9);
  });

  it('should be able to find a users sleep hours for the week', function() {
    expect(userSleep.findWeeklyHrs("2019/06/15")).to.deep.equal([6.1, 7.1, 7, 10.8, 10.4, 10.8, 9.8]);
  });

  it('should be able to find a users sleep quality for the week', function() {
    expect(userSleep.findWeeklyQuality("2019/06/15")).to.deep.equal([2.2, 2.2, 4.7, 4.7, 3.1, 3.2, 2.6]);
  });

})
