class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  getUserActivityData(userId) {
    return this.data.reduce((activityData, currentData) => {
      if (userId === currentData.userID) {
        activityData = currentData;
      }

      return activityData;
    }, null);
  }

  calcAvgStat(forDate, statType) {
    const dailyActivity = this.data.filter(currentData => {
      return forDate === currentData.date;
    });

    return dailyActivity.reduce((average, currentData, index) => {
      average += currentData[statType];

      if (index === (dailyActivity.length - 1)) {
        return Math.round(average / dailyActivity.length);
      }

      return average;
    }, 0);
  }
}

module.exports = ActivityRepository;
