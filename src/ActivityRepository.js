class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(userId) {
    return this.data.find(userData => userId === userData.userID);
  }

  getDailyActivity(forDate) {
    return this.data.filter(dailyActivity => {
      return forDate === dailyActivity.date;
    });
  }

  calcAvgStat(forDate, statType) {
    const dailyActivity = this.getDailyActivity(forDate);

    return dailyActivity.map(curDatum => {
      return curDatum[statType];
    }).reduce((avg, stat) => avg + stat) / dailyActivity.length;
  }
}

module.exports = ActivityRepository;
