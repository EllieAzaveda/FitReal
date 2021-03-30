class Hydration {
  constructor(hydrationData) {
    this.id = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }

  findUser(hydrationData, id) {
    let userData = [];

    if(id === this.id) {
      hydrationData.filter()
    }
  }

  // calcAvgDailyOunces() {
  //
  // }

  findDailyOunces(hydrationData, date) {
    const checkedDate = hydrationData.filter()

    if(this.date === date);
    return ;
  }
  //
  // calcDailyOunces() {
  //
  // }

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
