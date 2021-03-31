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
        "date": "2021/03/21",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2021/03/22",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 1,
        "date": "2021/03/23",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2021/03/24",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 1,
        "date": "2021/03/25",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 1,
        "date": "2021/03/26",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      },
      {
        "userID": 1,
        "date": "2021/03/27",
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

  let userActivity;

  beforeEach("setup initial UserActivity", () => {
    userActivity = new UserActivity(activityData);
  });
  
  describe("calcMilesWalked()", () => {
    
    it("should calculate and return the number of miles the user has walked in a given day", () => { 
      const userData = {
        "id": 1, 
        "name": "Hans Person",
        "address": "4255 Real St, Actual Town AW 01010-0101",
        "email": "hans@hotmail.com",
        "strideLength": 4.2,
        "dailyStepGoal": 4004,
        "friends": [ 2, 3, 4 ]
      };
      const user = new User(userData);

      const stepsDay1 = userActivity.data[0].numSteps;
      const stepsDay2 = userActivity.data[1].numSteps;
      const strideLength = user.data.strideLength;

      const calculatedMiles1 = (stepsDay1 / (5290 / strideLength)).toFixed(2);
      const calculatedMiles2 = (stepsDay2 / (5290 / strideLength)).toFixed(2);
      
      const returnedMiles1 = userActivity.calcMilesWalked(
        "2021/03/21", strideLength
      );
      const returnedMiles2 = userActivity.calcMilesWalked(
        "2021/03/22", strideLength
      );

      expect(returnedMiles1).to.equal(calculatedMiles1);
      expect(returnedMiles2).to.equal(calculatedMiles2);
    });
  });

  describe("calcActiveMin()", () => {

    it("should return the number of minutes a user was active on a given day", () => {
      const minutesDay1 = userActivity.calcActiveMin("2021/03/21");
      const minutesDay2 = userActivity.calcActiveMin("2021/03/22");

      expect(minutesDay1).to.equal(userActivity.data[0].minutesActive);
      expect(minutesDay2).to.equal(userActivity.data[1].minutesActive);
    });
  });

  describe("calcWeeklyAvgMin()", () => {

    it("should calculate and return a user's average minutes active for a given week", () => {
      const weeklyActiveAvg = userActivity.calcWeeklyAvgMin("2021/03/24");
      expect(weeklyActiveAvg).to.equal(159);
    });
  });

  describe("checkStepsReached", () => {
    
  })
});