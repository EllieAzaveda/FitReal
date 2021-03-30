class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserData(id) {
    return this.hydrationData.reduce((hydrationData, currentData) => {
      if (id === this.hydrationData.userID) {
        userHydrationData = currentData;
      }
      return userHydrationData;
    }, null);
  }

}

module.exports = HydrationRepository;
