class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.reduce((userData, currentData) => {
      if (id === currentData.id) {
        userData = currentData;
      }

      return userData;
    }, null);
  }

  calcAvgStepGoal() {
    return this.data.reduce((avgStepGoal, currentData, index) => {
      avgStepGoal += currentData.dailyStepGoal;

      if (index === (this.data.length - 1)) {
        return Math.round(avgStepGoal / this.data.length);
      }

      return avgStepGoal;
    }, 0);
  }
}

module.exports = UserRepository;
