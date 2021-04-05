/* eslint-disable max-len */
const chai = require("chai");
const expect = chai.expect;

const ActivityRepository = require("../src/ActivityRepository.js");

describe("ActivityRepository", () => {
  let activityData, forDate1, forDate2, activityRepo;

  before("setup intial activity data", () => {
    activityData = [
      {
        "userID": 1,
        "date": "2021/03/27",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2021/03/27",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2021/03/27",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2021/03/28",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 2,
        "date": "2021/03/28",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 3,
        "date": "2021/03/28",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      }
    ]
    forDate1 = "2021/03/27";
    forDate2 = "2021/03/28"
  });

  beforeEach("setup initial ActivityRepository", () => {
    activityRepo = new ActivityRepository(activityData);
  });
  
  it("should instantiate an ActivityRepository", () => {
    let activityRepo = new ActivityRepository();
    expect(activityRepo).to.be.an.instanceOf(ActivityRepository);
  });

  it("should store activity data for all users", () => {
    expect(activityRepo.data).to.deep.equal(activityData);
  })

  describe("getUserData()", () => {

    it("should return user-specific activity data using a user's ID", () => {
      const user1Activity = activityRepo.getUserData(1);
      const user2Activity = activityRepo.getUserData(2);
      const user3Activity = activityRepo.getUserData(3);

      expect(user1Activity).to.deep.equal([activityData[0], activityData[3]]);
      expect(user2Activity).to.deep.equal([activityData[1], activityData[4]]);
      expect(user3Activity).to.deep.equal([activityData[2], activityData[5]]);
    });
  });

  describe("calcAvgStat()", () => {

    it("should calculate and return the average stairs climbed across all users for specific date", () => {
      const avgStairs1 = (16 + 10 + 33) / 3;
      const avgStairs2 = (32 + 13 + 18) / 3;

      const calculatedAvg1 = activityRepo.calcAvgStat(forDate1, "flightsOfStairs");
      const calculatedAvg2 = activityRepo.calcAvgStat(forDate2, "flightsOfStairs");

      expect(calculatedAvg1).to.equal(avgStairs1);
      expect(calculatedAvg2).to.equal(avgStairs2);
    });

    it("should calculate and return the average step count across all users for specific date", () => {
      const avgSteps1 = (3577 + 4294 + 7402) / 3;
      const avgSteps2 = (3486 + 11374 + 14810) / 3;

      const calculateAvg1 = activityRepo.calcAvgStat(forDate1, "numSteps");
      const calculateAvg2 = activityRepo.calcAvgStat(forDate2, "numSteps");

      expect(calculateAvg1).to.equal(avgSteps1);
      expect(calculateAvg2).to.equal(avgSteps2);
    });

    it("should calculate and return the average minutes active across all users for specific date", () => {
      const avgMin1 = (140 + 138 + 116) / 3;
      const avgMin2 = (114 + 213 + 287) / 3;

      const calculatedAvg1 = activityRepo.calcAvgStat(forDate1, "minutesActive");
      const calculatedAvg2 = activityRepo.calcAvgStat(forDate2, "minutesActive");

      expect(calculatedAvg1).to.equal(avgMin1);
      expect(calculatedAvg2).to.equal(avgMin2);
    });
  });
});