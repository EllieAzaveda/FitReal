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

  getWeeklyHydration(currentDate) {
    const weeklyHydration = [];
    this.weeklyDataArray.forEach(week => {
      week.forEach(day => {
        if (day.date === currentDate) {
          weeklyHydration.push(week);
        }
      })
    })
    return weeklyHydration[0];
  }

  findDailyOunces(date) {
    let foundUser = this.data.filter(user => user.date === date).map(userOunces => userOunces.numOunces);
    return foundUser[0];
  }

  calcOuncesForWeek(date) {
    let currentWeekData = this.getWeeklyHydration(date);

    return currentWeekData.map(userOunces => userOunces.numOunces);
  }

  calcAvgOunces() {
    return this.data.map(currentData => {
      return currentData.numOunces
    }).reduce((acc, numOunces) => acc + numOunces / this.data.length);
  }

}

module.exports = UserHydration;
