const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;

const UserRepository = require("../src/UserRepository");

describe("UserRepository", () => {
  let data;

  before("setup user data", () => {
    data = {
      "id": 1, 
      "name": "Hans Person-Being",
      "address": "4255 Real St, Actual Town AW 01010-0101",
      "email": "hans@hotmail.com",
      "strideLength": 4.2,
      "dailyStepGoal": 4004,
      "friends": [
        2,
        3,
        4
      ]
    };
  })

  it("should instantiate a User", () => {
    const userRepo = new UserRepository();
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  })

  it("should store user data", () => {
    const userRepo = new UserRepository(data);
    expect(userRepo.data).to.equal(data);
  })
})