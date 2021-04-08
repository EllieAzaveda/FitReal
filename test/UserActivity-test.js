const chai = require("chai");
const User = require("../src/User.js");
const expect = chai.expect;

const UserActivity = require("../src/UserActivity.js");

describe("Activity", () => {
  let activityData, userData, userActivity, user;

  before("setup initial activity data", () => {
    activityData = [
      {
        "userID": 1,
        "date": "2021/03/13",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2021/03/14",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 1,
        "date": "2021/03/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2021/03/16",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 1,
        "date": "2021/03/17",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 1,
        "date": "2021/03/18",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      },
      {
        "userID": 1,
        "date": "2021/03/19",
        "numSteps": 2634,
        "minutesActive": 107,
        "flightsOfStairs": 5
      },
      {
        "userID": 1,
        "date": "2021/03/20",
        "numSteps": 10333,
        "minutesActive": 114,
        "flightsOfStairs": 31
      },
      {
        "userID": 1,
        "date": "2021/03/21",
        "numSteps": 6389,
        "minutesActive": 41,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2021/03/22",
        "numSteps": 8015,
        "minutesActive": 106,
        "flightsOfStairs": 37
      },
      {
        "userID": 1,
        "date": "2021/03/23",
        "numSteps": 11652,
        "minutesActive": 20,
        "flightsOfStairs": 24
      },
      {
        "userID": 1,
        "date": "2021/03/24",
        "numSteps": 9256,
        "minutesActive": 108,
        "flightsOfStairs": 2
      },
      {
        "userID": 1,
        "date": "2021/03/25",
        "numSteps": 9303,
        "minutesActive": 27,
        "flightsOfStairs": 14
      },
      {
        "userID": 1,
        "date": "2021/03/26",
        "numSteps": 8024,
        "minutesActive": 216,
        "flightsOfStairs": 32
      },
      {
        "userID": 1,
        "date": "2021/03/27",
        "numSteps": 14113,
        "minutesActive": 80,
        "flightsOfStairs": 10
      },
      {
        "userID": 1,
        "date": "2021/03/28",
        "numSteps": 6188,
        "minutesActive": 292,
        "flightsOfStairs": 32
      }
    ]

    userData = {
      "id": 1, 
      "name": "Hans Person",
      "address": "4255 Real St, Actual Town AW 01010-0101",
      "email": "hans@hotmail.com",
      "strideLength": 4.2,
      "dailyStepGoal": 8000,
      "friends": [ 2, 3, 4 ]
    };
  });

  beforeEach("setup initial UserActivity and User", () => {
    userActivity = new UserActivity(activityData);
    user = new User(userData);
  });

  it("should instantiate an Activity", () => {
    const userActivity = new UserActivity();
    expect(userActivity).to.be.an.instanceOf(UserActivity);
  });

  it("should store activity data for a single user", () => {
    expect(userActivity.data).to.equal(activityData);
  });
  
  describe("calcMilesWalked()", () => {
    
    it("should calculate and return the number of miles the user has walked in a given day", () => { 
      const stepsDay1 = userActivity.data[0].numSteps;
      const stepsDay2 = userActivity.data[1].numSteps;
      const strideLength = user.strideLength;

      const calculatedMiles1 = (stepsDay1 / (5280 / strideLength));
      const calculatedMiles2 = (stepsDay2 / (5280 / strideLength));
      
      const returnedMiles1 = userActivity.calcMilesWalked("2021/03/13", strideLength);
      const returnedMiles2 = userActivity.calcMilesWalked("2021/03/14", strideLength);

      expect(returnedMiles1).to.equal(calculatedMiles1);
      expect(returnedMiles2).to.equal(calculatedMiles2);
    });
  });

  describe("checkStepsReached", () => {
    
    it("should calculate and return whether a user has reached their daily step goal", () => {
      const stepGoal = user.dailyStepGoal;

      const hasReached1 = userActivity.checkStepsReached("2021/03/13", stepGoal);
      const hasReached2 = userActivity.checkStepsReached("2021/03/17", stepGoal);

      expect(hasReached1).to.be.false;
      expect(hasReached2).to.be.true;
    })
  })

  describe("calcAvgWeeklyMinutes()", () => {

    it("should calculate and return a user's average minutes active for a given week", () => {
      const weeklyMinutes1 = [ 138, 116, 114, 213, 287, 107, 114 ];
      const weeklyMinutes2 = [ 41, 106, 20, 108, 27, 216, 80 ];

      const avgMin1 = weeklyMinutes1.reduce((acc, cur) => acc + cur) / weeklyMinutes1.length;
      const avgMin2 = weeklyMinutes2.reduce((acc, cur) => acc + cur) / weeklyMinutes2.length;

      const calculatedAvg1 = userActivity.calcAvgWeeklyMinutes("2021/03/17");
      const calculatedAvg2 = userActivity.calcAvgWeeklyMinutes("2021/03/24");
      
      expect(calculatedAvg1).to.equal(avgMin1);
      expect(calculatedAvg2).to.equal(avgMin2);
    });
  });

  describe("getStepsExceeded()", () => {

    it("should find all days where a user has exceeded their step goal", () => {
      const daysExceeded = [
        activityData[4], activityData[5], activityData[7], 
        activityData[9], activityData[10], activityData[11],
        activityData[12], activityData[13], activityData[14]
      ];
      const stepGoal = user.dailyStepGoal;

      expect(userActivity.getStepsExceeded(stepGoal)).to.deep.equal(daysExceeded);
    });
  });

  describe("getStairsRecord()", () => {

    it("should find a user's all-time stair climbing record", () => {
      const stairsRecord = activityData[9].flightsOfStairs;
      expect(userActivity.getStairsRecord()).to.equal(stairsRecord);
    });
  });

  describe("organizeWeeklyData()", () => {

    it("should organize all data by week", () => {
      const organizedData = [
        [ activityData[0] ], 
        activityData.slice(1, 8), activityData.slice(8, 15),
        [ activityData[15] ]
      ];

      expect(userActivity.organizeWeeklyData(activityData)).to.deep.equal(organizedData);
    });
  });
});
