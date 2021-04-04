import UserSleep from "./UserSleep.js";

export default class SleepRepository {
  constructor(data) {
    this.data = data;
    this.weeklyDataArray = this.organizeWeeklyData(data);
  }

  getUserData(id) {
<<<<<<< Updated upstream
    return this.data.filter(userData => userData.userID === id);
  }

  calcAvgSleepQuality() {
    let sum = this.data.map(currentData => {
      return currentData.sleepQuality
    }).reduce((acc, sleepQuality) => acc + sleepQuality);

    return sum / this.data.length;
  }
=======
    return this.sleepData.filter(userData => userData.userID === id);
  }

  organizeWeeklyData(data) {
    let weeklyData = [];
    let weeklyDataCopy = [...data];
>>>>>>> Stashed changes

  organizeWeeklyData(data) {
    let currentWeekData = [];

    return data.reduce((acc, cur, index) => {
      const day = dayjs(cur.date).day();

      if (day === 6) {
        currentWeekData.push(cur);
        acc.push([...currentWeekData]);
      } else if (day === 0) {
        currentWeekData = [];
        currentWeekData.push(cur);
      } else {
        currentWeekData.push(cur);
      }

      if ((index === this.data.length - 1) && currentWeekData.length) {
        acc.push([...currentWeekData]);
      }
      return acc;
    }, []);
  }

  getWeeklySleep(date) {
    const weeklySleep = [];
    this.weeklyDataArray.forEach(week => {
      week.forEach(day => {
        if (day.date === date) {
          weeklySleep.push(week);
        }
      })
    })
    return weeklySleep[0];
  }

<<<<<<< Updated upstream
  calcQualityLeaders(date) {
    const currentWeekData = this.getWeeklySleep(date);
    const qualityLeaders = [];

    const userIDs = currentWeekData.reduce((ids, datum) => {
      if (!ids.includes(datum.userID)) {
        ids.push(datum.userID);
      }
      return ids;
    }, []);

    userIDs.forEach(id => {
      let userSleep = new UserSleep(this.getUserData(id));
      let weeklyQuality = userSleep.findWeeklyQuality(date);
      let avgQuality = userSleep.calcAvgTotalQuality();

      if (avgQuality > 3) {
        qualityLeaders.push({ id, avgQuality });
      }
    });
    return qualityLeaders;
  }
=======
  // calcQualityLeaders(date) {
  //   const currentWeekData = this.getWeeklyQuality(date);
  //   const topSleepers = [];
  //   // const averages = [];
  //
  //   const currentUsers = currentWeekData.map(sleeper => this.getUserData(sleeper.userID));
  //
  //   const userzzz = currentUsers.forEach((sleeperArray) => {
  //     sleeperArray.reduce((acc, sleeper) => {
  //       let sum = acc + sleeper.sleepQuality;
  //       return sum / 3;
  //     }, [])
  //   });
  //   return userzzz;
  // }

  calcQualityLeaders(date) {
      const currentWeekData = this.getWeeklyQuality(date);
      const userIDs = currentWeekData.reduce((ids, datum) => {
        if (!ids.includes(datum.userID)) {
          ids.push(datum.userID);
        }

        return ids;
      }, []);
      const qualityLeaders = [];
      userIDs.forEach(id => {
        let userSleep = new UserSleep(this.getUserData(id));
        let weeklyQuality = userSleep.findWeeklyQuality(date);
        let avgQuality = weeklyQuality.reduce((totalQual, curQual) => {
          return totalQual + curQual;
        }) / weeklyQuality.length;

        if (avgQuality > 3) {
          qualityLeaders.push({ id, avgQuality });
        }
      });
      console.log(qualityLeaders);
      return qualityLeaders;
    }
>>>>>>> Stashed changes

  findTopSleeper(date) {
    let currentWeekData = this.getWeeklySleep(date);
    let maxHours = 0;

    return currentWeekData.reduce((topSleeper, sleeper) => {
      if (sleeper.hoursSlept > maxHours) {
        maxHours = sleeper.hoursSlept;
      }

      if (sleeper.hoursSlept === maxHours) {
        topSleeper.push(sleeper);
      }

      return topSleeper;
    }, []);
  }
}
