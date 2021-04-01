/* eslint-disable max-len */
const chai = require("chai");
const expect = chai.expect;

const ActivityRepository = require("../src/ActivityRepository.js");

describe("ActivityRepository", () => {
  let activityData, forDate, invalidForDate, activityRepo;

  before("setup intial activity data", () => {
    activityData = [
      {
        "userID": 1,
        "date": "2021/03/29",
        "numSteps": 5750,
        "minutesActive": 200,
        "flightsOfStairs": 24
      },
      {
        "userID": 2,
        "date": "2021/03/29",
        "numSteps": 3200,
        "minutesActive": 120,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2021/03/29",
        "numSteps": 8150,
        "minutesActive": 250,
        "flightsOfStairs": 30
      }
    ]
    forDate = "2021/03/29";
    invalidForDate = "2020/01/01";
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

      expect(user1Activity).to.deep.equal(activityData[0]);
      expect(user2Activity).to.deep.equal(activityData[1]);
      expect(user3Activity).to.deep.equal(activityData[2]);
    });

    it("should return 'undefined' if the provided ID is invalid", () => {
      const invalidID = 4;
      const invalidData = activityRepo.getUserData(invalidID);

      expect(invalidData).to.be.undefined;
    })
  });

  describe("calcAvgStat()", () => {

    it("should calculate and return the average stairs climbed across all users for specific date", () => {
      const avgStairs = (24 + 10 + 30) / 3;
      const calculatedAvg = activityRepo.calcAvgStat(forDate, "flightsOfStairs");

      expect(calculatedAvg).to.equal(avgStairs);
    });

    it("should calculate and return the average step count across all users for specific date", () => {
      const avgSteps = (5750 + 3200 + 8150) / 3;
      const calculateAvg = activityRepo.calcAvgStat(forDate, "numSteps");

      expect(calculateAvg).to.equal(avgSteps);
    });

    it("should calculate and return the average minutes active across all users for specific date", () => {
      const avgMin = (200 + 120 + 250) / 3;
      const calculatedAvg = activityRepo.calcAvgStat(forDate, "minutesActive");
      
      expect(calculatedAvg).to.equal(avgMin);
    });
  });
});