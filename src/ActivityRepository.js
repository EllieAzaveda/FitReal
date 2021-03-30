class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(userId) {
    return this.data.find(userData => userId === userData.userID);
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

      return average ? average : null;
    }, 0);
  }
}

module.exports = ActivityRepository;
