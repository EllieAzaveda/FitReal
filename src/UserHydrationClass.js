const HydrationRepository = require('../src/HydrationRepository');

// Rename to UserHydration
class UserHydration {
  constructor(data) {
    this.data = data;
  }

  // Pull 1st object out into its own array
  // Every 7 objects => push objects into their own array
  // Should have an array of arrays of objects - Eek!
  // Check by console.logging a specific if in the entire
  //hydration file!
  organizeWeeklyData(id) {
    let specificUserData = this.getUserData(id);
    return specificUserData;
  }

  findDailyOunces(date) {
    let foundUser = this.data.filter(user => user.date === date).map(userOunces => userOunces.numOunces);
    return foundUser[0];
  }

  // Add method to call in calcOuncesForWeek that breaks users total
  // data into an array of objects for each week
  // Onclick, grabs the date -> searches for that date in all of the
  // arrays -> uses that array to display the weekly data

  calcOuncesForWeek() {
    return this.data.map(userData => userData.numOunces);
  }

  calcAvgOunces() {
    // iterate => Get sum of all numOunces
    // Dive by total # objects/index+1
    //reduce!
    let avgOunces = this.data.filter(userOunces => userOunces.numOunces);
    console.log(avgOunces);
  }

}

module.exports = UserHydration;
