class UserActivity {
  constructor(data = []) {
    this.data = data;
    this.weeklyData = this.organizeWeeklyData(this.data);
  }

  calcMilesWalked(forDate, strideLength) {
    return (this.getDailyStat(forDate, "numSteps") / (5280 / strideLength));
  }

  calcAvgWeeklyMinutes(currentDate) {
    const weeklyActivity = this.getWeeklyActivity(currentDate);
    
    return weeklyActivity.map(activity => {
      return activity.minutesActive
    }).reduce((totalMin, curMin) => totalMin + curMin) / weeklyActivity.length;
  }

  calcTotalStat(statType) {
    return this.data.map(curDatum => {
      return curDatum[statType];
    }).reduce((avg, stat) => avg + stat) / this.data.length;
  }

  getDailyStat(forDate, statType) {
    return this.getDailyActivity(forDate)[statType];
  }

  getStepsExceeded(stepGoal) {
    return this.data.filter(curDatum => curDatum.numSteps > stepGoal);
  }

  getStairsRecord() {
    return this.data.map(curDatum => {
      return curDatum.flightsOfStairs
    }).reduce((record, curFlights) => {
      if (curFlights > record) {
        record = curFlights;
      }

      return record;
    });
  }

  checkStepsReached(forDate, stepGoal) {
    const dailyActivity = this.getDailyActivity(forDate);
    return dailyActivity.numSteps > stepGoal;
  }
  
  getDailyActivity(forDate) {
    return this.data.find(dailyActivity => forDate === dailyActivity.date);
  }

  getWeeklyActivity(currentDate) {
    const weeklyActivity = [];

    this.weeklyData.forEach(week => {
      week.forEach(day => {
        if (day.date === currentDate) {
          weeklyActivity.push(week);
        }
      })
    })

    return weeklyActivity[0];
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
}

if (typeof module !== "undefined") {
  module.exports = UserActivity;
}
