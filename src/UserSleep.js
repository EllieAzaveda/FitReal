class UserSleep {
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

  getUserWeeklyQuality(currentDate) {
    const weeklyQuality = [];
    this.weeklyDataArray.forEach(week => {
      week.forEach(day => {
        if (day.date === currentDate) {
          weeklyQuality.push(week);
        }
      })
    })
    return weeklyQuality[0];
  }

// "identify by id"?? Double check that we don't need a parameter
  calcAvgTotalHrs() {
    let sum = this.data.map(currentData => {
      return currentData.hoursSlept
    }).reduce((acc, hoursSlept) => acc + hoursSlept);

    return sum / this.data.length;
  }

  calcAvgTotalQuality() {
    let sum = this.data.map(currentData => {
      return currentData.sleepQuality
    }).reduce((acc, sleepQuality) => acc + sleepQuality);

    return sum / this.data.length;
  }

  calcQualityForWeek(date) {
    let currentWeekData = this.getUserWeeklyQuality(date);

    return currentWeekData.map(userQuality => userQuality.sleepQuality);
  }
}

module.exports = UserSleep;

// For a user, their average sleep quality per day
// over all time

// For a user, how many hours they slept for a specific
// day (identified by a date)

// For a user, their sleep quality for a specific day
// (identified by a date)

// For a user, how many hours slept each day over the
// course of a given week (7 days) - you should be able
// to calculate this for any week, not just the latest week
