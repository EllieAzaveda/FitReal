/* eslint-disable max-len */
const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;

const User = require("../src/User.js");

describe("User", () => {
  let userData

  before("setup intial user data", () => {
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
        "friends": [ 1 , 3, 4 ]
      }
    ];
  })

  it("should instantiate a User", () => {
    const user = new User();
  });

  it("should store data for a single user", () => {
    const user = new User(userData[0]);
    expect(user.data).to.deep.equal(userData[0]);
  });

  describe("getFirstName", () => {
    let user;

    beforeEach("setup initial User", () => {
      user = new User(userData[0]);
    })
    
    it("should return a user's first name", () => {
      const firstName = "Hans";
      const returnedFirstName = user.getFirstName();

      expect(returnedFirstName).to.equal(firstName);
    });
  });
});