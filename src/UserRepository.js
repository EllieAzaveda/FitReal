class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.find(currentDatum => id === currentDatum.id);
  }

  calcAvgStepGoal() {
    return this.data.map(currentDatum => {
      return currentDatum.dailyStepGoal
    }).reduce((acc, stepGoal) => acc + stepGoal) / this.data.length;
  }
}

module.exports = UserRepository;
