import UserSleep from "./UserSleep.js";

export default class SleepRepository {
  constructor(data) {
    this.data = data;
    this.weeklyDataArray = this.organizeWeeklyData(data);
  }

  getUserData(id) {
    return this.data.filter(userData => userData.userID === id);
  }

  calcAvgSleepQuality() {
    let sum = this.data.map(currentData => {
      return currentData.sleepQuality
    }).reduce((acc, sleepQuality) => acc + sleepQuality);

    return sum / this.data.length;
  }

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
