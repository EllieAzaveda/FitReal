class HydrationRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.filter(userData => userData.userID === id);
  }
}

if (typeof module !== "undefined") {
  module.exports = HydrationRepository;
}
