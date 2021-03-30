class Hydration {
  constructor(id, date, numOunces) {
    this.id = id;
    this.date = date;
    this.numOunces = numOunces;
  }

  findDailyOunces(hydrationData, date) {
    let foundUser = hydrationData.filter(user => {
        return user.date === date;
    });
    return foundUser[0].numOunces;
  }


}

module.exports = Hydration;

// calcAvgDailyOunces the average fluid ounces consumed
// per day for all time
//
// findDailyOunces how many fluid ounces they consumed
// for a specific day (identified by a date) =>
// I'm assuming we should save this in an array or maybe
// make an object for daily user data (hydration, sleep,
//   & activity) that we can iterate through
//
// calcDailyOunces how many fluid ounces of water consumed
// each day over the course of a week (7 days) - return the
// amount for each day
