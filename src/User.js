class User {
  constructor(data) {
    this.data = data;
  }

  getFirstName() {
    return this.data.name.split(" ")[0];
  }
}

module.exports = User;