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
    }, {});
  }
}

module.exports = UserRepository;