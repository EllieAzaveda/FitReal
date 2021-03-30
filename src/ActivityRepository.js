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

  calcAvgStairs(date) {
    const dailyActivity = this.data.filter(currentData => {
      return date === currentData.date;
    });

    return dailyActivity.reduce((avgStairs, currentData, index) => {
      avgStairs += currentData.flightsOfStairs;

      if (index === (dailyActivity.length - 1)) {
        return Math.round(avgStairs / dailyActivity.length);
      }

      return avgStairs;
    }, 0);
  }
}

module.exports = ActivityRepository;