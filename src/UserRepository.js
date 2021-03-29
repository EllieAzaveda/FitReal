class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.reduce((userData, dataSet) => {
      if (id === dataSet.id) {
        userData = dataSet;
      }

      return userData;
    }), null;
  }

  calcAvgStepGoal() {
    return this.data.reduce((avgStepGoal, dataSet, index) => {
      avgStepGoal += dataSet.dailyStepGoal;

      if (index === (this.data.length - 1)) {
        return Math.round(avgStepGoal / this.data.length);
      }

      return avgStepGoal;
    }, 0);
  }
}

module.exports = UserRepository;