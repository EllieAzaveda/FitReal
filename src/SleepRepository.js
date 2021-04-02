class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
    this.weeklyDataArray = this.organizeWeeklyData(sleepData);
  }

  calcAvgSleepQuality() {
    let sum = this.sleepData.map(currentData => {
      return currentData.sleepQuality
    }).reduce((acc, sleepQuality) => acc + sleepQuality);

    return sum / this.sleepData.length;
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

  getWeeklyQuality(currentDate) {
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

  calcQualityLeaders(date) {
    let currentWeekData = this.getWeeklyQuality(date);

    return currentWeekData.filter(user => user.sleepQuality > 3);
  }
  // Find all users who average a sleep quality greater
  // than 3 for a given week (7 days) - you should be able
  // to calculate this for any week, not just the latest week

  // Grab each users sleepQuality per week => use User method w/ array
  // Average that sleepQuality => reduce
  // Loop => instantiates a userSleep object for each id

  // For a given day (identified by the date), find the users
  // who slept the most number of hours (one or more if
  //   they tied)

}

module.exports = SleepRepository;
