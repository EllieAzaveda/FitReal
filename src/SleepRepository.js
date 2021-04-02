class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
    this.weeklyDataArray = this.organizeWeeklyData(sleepData);
  }

  calcAvgSleepQuality() {
    return this.sleepData.map(currentData => {
      return currentData.sleepQuality
    }).reduce((acc, sleepQuality) => acc + sleepQuality / this.sleepData.length);
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

  calcQualityLeaders(date) {
    let currentWeekData = this.getWeeklyHydration(date);

    return currentWeekData.filter(user => user.sleepQuality > 3);
  }
  // Find all users who average a sleep quality greater
  // than 3 for a given week (7 days) - you should be able
  // to calculate this for any week, not just the latest week

  // For a given day (identified by the date), find the users
  // who slept the most number of hours (one or more if
  //   they tied)

}

module.exports = SleepRepository;
