export default class HydrationRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.filter(userData => userData.userID === id);
  }
}

