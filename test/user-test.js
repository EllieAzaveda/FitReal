/* eslint-disable max-len */
const chai = require("chai");
const expect = chai.expect;

const User = require("../src/User.js");

describe("User", () => {
  let userData

  before("setup intial user data", () => {
    userData = [
      {
        "id": 1, 
        "name": "Hans Person",
        "address": "4255 Real St, Actual Town AW 01010-0101",
        "email": "hans@hotmail.com",
        "strideLength": 4.2,
        "dailyStepGoal": 4004,
        "friends": [ 2, 3, 4 ]
      },
      {
        "id": 2,
        "name": "Tina Human",
        "address": "1337 Another Ave, Townesplace AW 10101-1010",
        "email": "tina@yahoo.com",
        "strideLength": 4.0,
        "dailyStepGoal": 9001,
        "friends": [ 1, 3, 4 ]
      }
    ];
  })

  it("should instantiate a User", () => {
    const user = new User();
    expect(user).to.be.an.instanceOf(User);
  });

  it("should only store user data for a single user", () => {
    const user = new User(userData[0]);
    expect(user.data).to.deep.equal(userData[0]);
  });

  describe("getFirstName", () => {
    let user1, user2;

    beforeEach("setup initial Users", () => {
      user1 = new User(userData[0]);
      user2 = new User(userData[1])
    })
    
    it("should return a user's first name", () => {
      const firstName1 = "Hans";
      const firstName2 = "Tina";

      const returnedName1 = user1.getFirstName();
      const returnedName2 = user2.getFirstName();

      expect(returnedName1).to.equal(firstName1);
      expect(returnedName2).to.equal(firstName2);
    });
  });
});