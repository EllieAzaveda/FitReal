export default class UserSleep {
  constructor(data) {
    this.data = data;
    this.weeklyDataArray = this.organizeWeeklyData(data);
  }

  organizeWeeklyData(data) {
    let currentWeekData = [];

    return data.reduce((acc, cur, index) => {
      const day = dayjs(cur.date).day();

      if (day === 6) {
        currentWeekData.push(cur);
        acc.push([...currentWeekData]);
      } else if (day === 0) {
        currentWeekData = [];
        currentWeekData.push(cur);
      } else {
        currentWeekData.push(cur);
      }

      if ((index === this.data.length - 1) && currentWeekData.length) {
        acc.push([...currentWeekData]);
      }

      return acc;
    }, []);
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

  findDailyHrs(date) {
    let foundUser = this.data.filter(user => user.date === date).map(userHours => userHours.hoursSlept);
    return foundUser[0];
  }

  findDailyQuality(date) {
    let foundUser = this.data.filter(user => user.date === date).map(userSleep => userSleep.sleepQuality);
    return foundUser[0];
  }

  findWeeklyHrs(date) {
    let currentWeekData = this.getUserWeeklyQuality(date);
    return currentWeekData.map(userHours => userHours.hoursSlept);
  }

  findWeeklyQuality(date) {
    let currentWeekData = this.getUserWeeklyQuality(date);
    return currentWeekData.map(userQuality => userQuality.sleepQuality);
  }

  findWeeklyAvg(date) {
    let currentWeek = this.findWeeklyQuality(date);
    let sum = currentWeek.reduce((acc, sleepQuality) => acc + sleepQuality);
    return sum / currentWeek.length;
  }
}
