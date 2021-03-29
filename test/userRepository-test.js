const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;

const UserRepository = require("../src/UserRepository");

describe("UserRepository", () => {
  let data;

  before("setup user data", () => {
    data = [
      {
        "id": 1, 
        "name": "Hans Person-Being",
        "address": "4255 Real St, Actual Town AW 01010-0101",
        "email": "hans@hotmail.com",
        "strideLength": 4.2,
        "dailyStepGoal": 4004,
        "friends": [ 2, 3, 4 ]
      },
      {
        "id": 2,
        "name": "Tina Human",
        "address": "2020 Another St, Townes Place AW 10101-1010",
        "email": "tina@yahoo.com",
        "strideLength": 4.0,
        "dailyStepGoal": 9001,
        "friends": [ 1 , 3, 4 ]
      }
    ];
  })

  it("should instantiate a User", () => {
    const userRepo = new UserRepository();
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  })

  it("should store user data", () => {
    const userRepo = new UserRepository(data);
    expect(userRepo.data).to.equal(data);
  })

  describe("getUserData", () => {
    let userRepo;

    beforeEach("setup initial UserRepository", () => {
      userRepo = new UserRepository(data);
    });

    it("should return user-specific data using a user's ID", () => {
      const firstId = userRepo.data[0].id;
      const secondId = userRepo.data[1].id;
      
      const firstDataSet = userRepo.getUserData(firstId);
      const secondDataSet = userRepo.getUserData(secondId);

      expect(firstDataSet).to.equal(userRepo.data[0]);
      expect(secondDataSet).to.equal(userRepo.data[1]);
    });

    it ("should return 'undefined' if an invalid ID is supplied", () => {
      const invalidID = 3;
      const invalidData = userRepo.getUserData(invalidID);

      expect(invalidData).to.be.undefined;
    })
  });

  describe("calcAvgStepGoal", () => {
    let userRepo;

    beforeEach("setup initial UserRepository", () => {
      userRepo = new UserRepository(data);
    });

    it("should calculate and return the average step goal across all user data", () => {
      const avgStepGoal = userRepo.calcAvgStepGoal();
      expect(avgStepGoal).to.equal(6503);
    });
  });
})