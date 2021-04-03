class UserActivity {
  constructor(data) {
    this.data = data || [];
    this.weeklyData = this.organizeWeeklyData(this.data);
  }

  calcMilesWalked(forDate, strideLength) {
    const dailyActivity = this.getDailyActivity(forDate);
    const steps = dailyActivity.numSteps;

    return (steps / (5280 / strideLength)).toFixed(2);
  }

  calcAvgWeeklyMinutes(currentDate) {
    const weeklyActivity = this.getWeeklyActivity(currentDate);
    
    return weeklyActivity.map(activity => {
      return activity.minutesActive
    }).reduce((totalMin, curMin) => totalMin + curMin) / weeklyActivity.length;
  }

  getMinutesActive(forDate) {
    return this.getDailyActivity(forDate).minutesActive;
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
    let weeklyData = [];
    let weeklyDataCopy = [...data];
    
    weeklyData.push(weeklyDataCopy.splice(0, 1));
    while (weeklyDataCopy.length > 0) {
      weeklyData.push(weeklyDataCopy.splice(0, 7));
    }

    return weeklyData;
  }
}

module.exports = UserActivity;
