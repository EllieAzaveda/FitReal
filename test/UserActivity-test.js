const chai = require("chai");
const User = require("../src/User.js");
const expect = chai.expect;

const UserActivity = require("../src/UserActivity.js");

describe("Activity", () => {
  let activityData;

  before("setup initial activity data", () => {
    activityData = [
      {
        "userID": 1,
        "date": "2021/03/23",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2021/03/24",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 1,
        "date": "2021/03/25",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2021/03/26",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 1,
        "date": "2021/03/27",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 1,
        "date": "2021/03/28",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      },
      {
        "userID": 1,
        "date": "2021/03/29",
        "numSteps": 2634,
        "minutesActive": 107,
        "flightsOfStairs": 5
      }
    ]
  });

  it("should instantiate an Activity", () => {
    const userActivity = new UserActivity();
    expect(userActivity).to.be.an.instanceOf(UserActivity);
  });

  it("should store activity data for a single user", () => {
    const userActivity = new UserActivity(activityData);
    expect(userActivity).to.equal(activityData);
  });

  describe("calcMilesWalked()", () => {
    let userActivity, user, userData;

    before("setup intial user data", () => {
      userData = {
        "id": 1, 
        "name": "Hans Person",
        "address": "4255 Real St, Actual Town AW 01010-0101",
        "email": "hans@hotmail.com",
        "strideLength": 4.2,
        "dailyStepGoal": 4004,
        "friends": [ 2, 3, 4 ]
      };
    });

    beforeEach("setup intial UserActivity", () => {
      userActivity = new UserActivity(activityData);
      user = new User(userData)
    });
    
    it("should calculate and return the number of miles the user has walked in a given day", () => { 
      const stepsDay1 = userActivity.data[0].numSteps;
      const stepsDay2 = userActivity.data[1].numSteps;
      const strideLength = user.data.strideLength;
      
      const milesDay1 = userActivity.calcMilesWalked(
        "2021/03/23", strideLength
      );
      const milesDay2 = userActivity.calcMilesWalked(
        "2021/03/24", strideLength
      );

      expect(milesDay1).to.equal(stepsDay1 / (5290 / strideLength));
      expect(milesDay2).to.equal(stepsDay2 / (5290 / strideLength);
    });
  });

  describe("calcActiveMin()", () => {
    let userActivity;

    beforeEach("setup intial UserActivity", () => {
      userActivity = new UserActivity();
    });

    it("should return the number of minutes a user was active on a given day", () => {
      const minutesDay1 = userActivity.calcActiveMin("2021/03/23");
      const minutesDay2 = userActivity.calcActiveMin("2021/03/23");

      expect(minutesDay1).to.equal(userActivity.data[0].minutesActive);
      expect(minutesDay2).to.equal(userActivity.data[1].minutesActive);
    });
  });
});