//const hydrationData = require('../data/hydration');

class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserData(id) {
    return this.hydrationData.filter(userData => userData.userID === id);
  }

}

module.exports = HydrationRepository;
