class UserHydration {
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

  findDailyOunces(date) {
    let foundUser = this.data.filter(user => user.date === date).map(userOunces => userOunces.numOunces);
    return foundUser[0];
  }

  calcOuncesForWeek(date) {
    let currentWeekData = this.getWeeklyHydration(date);

    return currentWeekData.map(userOunces => userOunces.numOunces);
  }

  calcAvgTotalOunces() {
    let sum = this.data.map(currentData => {
      return currentData.numOunces
    }).reduce((acc, numOunces) => acc + numOunces);

    return sum / this.data.length;
  }

}

if (typeof module !== "undefined") {
  module.exports = UserHydration;
}
