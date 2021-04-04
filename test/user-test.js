/* eslint-disable max-len */
const chai = require("chai");
const expect = chai.expect;

const User = require("../src/User.js");

describe("User", () => {
  let userData, user1, user2;

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

  beforeEach("setup initial Users", () => {
    user1 = new User(userData[0]);
    user2 = new User(userData[1])
  })

  it("should instantiate a User", () => {
    const user = new User();
    expect(user).to.be.an.instanceOf(User);
  });

  it("should store a user's ID", () => {
    expect(user1.id).to.deep.equal(userData[0].id);
    expect(user2.id).to.deep.equal(userData[1].id);
  });

  it("should store a user's name", () => {

  });

  it("should store a user's address", () => {
    
  });

  it("should store a user's email", () => {
    
  });

  it("should store a user's stride length", () => {
    
  });

  it("should store a user's daily step goal", () => {
    
  });

  it("should store a user's friends", () => {
    
  });

  describe("getFirstName()", () => {
    let user1, user2;

    
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