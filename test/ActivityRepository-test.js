/* eslint-disable max-len */
const chai = require("chai");
const expect = chai.expect;

const ActivityRepository = require("../src/ActivityRepository.js");

describe("ActivityRepository", () => {
  let activityData;

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
  });
  
  it("should instantiate an ActivityRepository", () => {
    const activityRepo = new ActivityRepository();
    expect(activityRepo).to.be.an.instanceOf(ActivityRepository);
  });

  it("should store activity data for all users", () => {
    const activityRepo = new ActivityRepository(activityData);
    expect(activityRepo.data).to.deep.equal(activityData);
  })

  describe("getUserData()", () => {
    let activityRepo;

    beforeEach("setup initial ActivityRepository", () => {
      activityRepo = new ActivityRepository(activityData);
    });

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
    let date, activityRepo;

    before("setup date to find averages for", () => {
      date = "2021/03/29";
    });

    beforeEach("setup initial UserRepository", () => {
      activityRepo = new ActivityRepository(activityData);
    });

    it("should calculate and return the average stairs climbed across all users for specific date", () => {
      const avgStairs = activityRepo.calcAvgStat(date, "flightsOfStairs");
      expect(avgStairs).to.equal(21);
    });

    it("should calculate and return the average step count across all users for specific date", () => {
      const avgSteps = activityRepo.calcAvgStat(date, "numSteps");
      expect(avgSteps).to.equal(5700);
    });

    it("should calculate and return the average minutes active across all users for specific date", () => {
      const avgMin = activityRepo.calcAvgStat(date, "minutesActive");
      expect(avgMin).to.equal(190);
    });

    it("should return 0 if provided date does not have recorded activity", () => {
      const invalidDate = "2020/01/01";
      const avgStat = activityRepo.calcAvgStat(invalidDate);

      expect(avgStat).to.equal(0);
    });
  });
});