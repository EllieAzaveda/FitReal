const arrayData = require('../data/hydration.js');
const hydrationData = data.hydrationData;

class HydrationRepository {
  constructor(data) {
    this.data = data;
  }

  getUserHydrationData() {
    this.data = hydrationData.map(({ userID, date, numOunces }) => {

    })
    //this.data
  }

}

module.exports = HydrationRepository;
