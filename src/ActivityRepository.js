class ActivityRepository {
  constructor(data = []) {
    this.data = data;
  }

  getUserData(userId) {
    return this.data.filter(userData => userId === userData.userID);
  }

  calcAvgStat(forDate, statType) {
    const dailyActivity = this.getDailyActivity(forDate);
    console.log(dailyActivity);

    return dailyActivity.map(curDatum => {
      return curDatum[statType];
    }).reduce((avg, stat) => avg + stat) / dailyActivity.length;
  }
  
  calcAvgMiles(forDate, userData) {
    const dailyActivity = this.getDailyActivity(forDate);
    const userRepo = new UserRepository(userData);

    return dailyActivity.reduce((totalMiles, currentDatum) => {
      const user = new User(userRepo.getUserData(currentDatum.id));
      const milesWalked = (currentDatum.numSteps / (5280 / user.strideLength));

      return totalMiles + milesWalked;
    }, 0) / dailyActivity.length;
  }

  getDailyActivity(forDate) {
    return this.data.filter(dailyActivity => {
      return forDate === dailyActivity.date;
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = ActivityRepository;
}
