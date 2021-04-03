/* eslint-disable max-len */
const chai = require("chai");
const expect = chai.expect;

const UserRepository = require("../src/UserRepository.js");

describe("UserRepository", () => {
  let userData;

  before("setup initial user data", () => {
    userData = [
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
        "friends": [ 1, 3, 4 ]
      }
    ];
  })

  it("should instantiate a UserRepository", () => {
    const userRepo = new UserRepository();
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  })

  it("should store all user data", () => {
    const userRepo = new UserRepository(userData);
    expect(userRepo.data).to.deep.equal(userData);
  })

  describe("getUserData()", () => {
    let userRepo;

    beforeEach("setup initial UserRepository", () => {
      userRepo = new UserRepository(userData);
    });

    it("should return user-specific user data using a user's ID", () => {
      const userId1 = userRepo.data[0].id;
      const userId2 = userRepo.data[1].id;

      const userData1 = userRepo.getUserData(userId1);
      const userData2 = userRepo.getUserData(userId2);

      expect(userData1).to.deep.equal(userRepo.data[0]);
      expect(userData2).to.deep.equal(userRepo.data[1]);
    });

    it("should return 'undefined' if an invalid ID is supplied", () => {
      const invalidId = 3;
      const invalidData = userRepo.getUserData(invalidId);

      expect(invalidData).to.be.undefined;
    })
  });

  describe("calcAvgStepGoal()", () => {
    let userRepo;

    beforeEach("setup initial UserRepository", () => {
      userRepo = new UserRepository(userData);
    });

    it("should calculate and return the average step goal across all user data", () => {
      const avgStepGoal = userRepo.calcAvgStepGoal();
      expect(avgStepGoal).to.equal(6502.5);
    });
  });
})
