class UserActivity {
  constructor(data) {
    this.data = data;
    this.weeklyData = this.organizeWeeklyData(this.data);
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

  checkStepsReached(forDate, stepGoal) {
    const dailyActivity = this.getDailyActivity(forDate);
    return dailyActivity.numSteps > stepGoal;
  }
  
  getDailyActivity(forDate) {
    return this.data.find(dailyActivity => {
      return forDate === dailyActivity.date;
    });
  }

  getWeekActivity(currentDate) {
    return this.weeklyData.find(week => {
      return week.find
    })
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