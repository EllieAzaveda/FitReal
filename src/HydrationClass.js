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

  calcDailyOunces(hydrationData) {
    let weeklyOunces = [];
    let weeklyData = hydrationData.forEach(function (userData) {
      weeklyOunces.push(userData.numOunces);
      return weeklyOunces;
    });
    return weeklyOunces;
  }

  calcAvgDailyOunces() {
  }

}

module.exports = Hydration;
