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
    expect(user1.name).to.deep.equal(userData[0].name);
    expect(user2.name).to.deep.equal(userData[1].name);
  });

  it("should store a user's address", () => {
    expect(user1.address).to.deep.equal(userData[0].address);
    expect(user2.address).to.deep.equal(userData[1].address);
  });

  it("should store a user's email", () => {
    expect(user1.email).to.deep.equal(userData[0].email);
    expect(user2.email).to.deep.equal(userData[1].email);
  });

  it("should store a user's stride length", () => {
    expect(user1.strideLength).to.deep.equal(userData[0].strideLength);
    expect(user2.strideLength).to.deep.equal(userData[1].strideLength);
  });

  it("should store a user's daily step goal", () => {
    expect(user1.dailyStepGoal).to.deep.equal(userData[0].dailyStepGoal);
    expect(user2.dailyStepGoal).to.deep.equal(userData[1].dailyStepGoal);
  });

  it("should store a user's friends", () => {
    expect(user1.friends).to.deep.equal(userData[0].friends);
    expect(user2.friends).to.deep.equal(userData[1].friends);
  });

  describe("getFirstName()", () => {

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