class UserActivity {
  constructor(data) {
    this.data = data;
  }

  calcMilesWalked(forDate, strideLength) {
    const dailyActivity = this.getDailyActivity(forDate);
    const steps = dailyActivity.numSteps;

    return (steps / (5280 / strideLength)).toFixed(2)
  }

  calcAvgWeeklyMinutes(currentDate) {

  }

  getMinuteActive(forDate) {
    return this.getDailyActivity(forDate).minutesActive;
  }

  getWeeklyActivity(data) {
    let weeklyData = [];
    let weeklyDataCopy = [...data];
    
    weeklyData.push(weeklyDataCopy.splice(0, 1));
    while (weeklyDataCopy.length > 0) {
      weeklyData.push(weeklyDataCopy.splice(0, 7));
    }
    return weeklyData;
  }
  
  getDailyActivity(forDate) {
    return this.data.find(dailyActivity => {
      return forDate === dailyActivity.date;
    });
  }
  
  checkStepsReached(forDate, stepGoal) {
    const dailyActivity = this.getDailyActivity(forDate);
    return dailyActivity.numSteps > stepGoal;
  }
}

module.exports = UserActivity;