const Hydration = require('../src/HydrationClass');
//const hydrationData = require('../data/hydration');

class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserData(id) {
    const hydration = new Hydration(this.hydrationData.userID, this.hydrationData.date, this.hydrationData.numOunces);

    let userHydration = this.hydrationData.filter(userData => {
      if (id === userData.userID) {
        return userData;
      }
    });
    return userHydration;
  }

}

module.exports = HydrationRepository;
