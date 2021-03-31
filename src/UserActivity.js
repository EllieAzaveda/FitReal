class UserActivity {
  constructor(data) {
    this.data = data;
  }

  calcMilesWalked(forDate, strideLength) {
    const dailyActivity = this.getDailyActivity(forDate);
    const steps = dailyActivity.numSteps;

    return (steps / (5280 / strideLength)).toFixed(2)
  }

  calcAvgWeeklyMinutes(forWeek) {

  }

  getMinuteActive(forDate) {
    return this.getDailyActivity(forDate).minutesActive;
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