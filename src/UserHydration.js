const HydrationRepository = require('../src/HydrationRepository');

class UserHydration {
  constructor(data) {
    this.data = data;
    this.weeklyDataArray = this.organizeWeeklyData(data);
  }

  organizeWeeklyData(data) {
    let weeklyData = [];
    let weeklyDataCopy = [...data];

    weeklyData.push(weeklyDataCopy.splice(0, 1));

    while (weeklyDataCopy.length > 0) {
      weeklyData.push(weeklyDataCopy.splice(0, 7));
    }
    return weeklyData;
  }

  findDailyOunces(date) {
    let foundUser = this.data.filter(user => user.date === date).map(userOunces => userOunces.numOunces);
    return foundUser[0];
  }

  // Add method to call in calcOuncesForWeek that breaks users
  // total data into an array of objects for each week
  // Onclick, grabs the date -> searches for that date in all
  // of the arrays -> uses that array to display the weekly data

  calcOuncesForWeek(date) {

    if() {
      this.weeklyDataArray.find(date)
    }
    // return this.data.map(userData => userData.numOunces);
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
