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

    return this.getDailyActivity().reduce((average, activityRecord, index) => {
      average += activityRecord[statType];

      if (index === (dailyActivity.length - 1)) {
        return Math.round(average / dailyActivity.length);
      }

      return average;
    }, 0);
  }
}

module.exports = ActivityRepository;
