/* eslint-disable no-undef */

// Dependents
let userID = 20;
let currentDate = "2019/09/01"

const userRepo = new UserRepository(userData);
const activityRepo = new ActivityRepository(activityData);
const hydrationRepo = new HydrationRepository(hydrationData);
const sleepRepo = new SleepRepository(sleepData);

const user = new User(userRepo.getUserData(userID));
const userActivity = new UserActivity(activityRepo.getUserData(userID));
const userHydration = new UserHydration(hydrationRepo.getUserData(userID));
const userSleep = new UserSleep(sleepRepo.getUserData(userID));

// Query Selectors
const datePicker = document.getElementById("datePicker")

const greeting = document.getElementById("greeting");
const strideLength = document.getElementById("strideLength");
const stepComparison = document.getElementById("stepComparison");
const friends = document.getElementById("friends");

const averageSteps = document.getElementById("averageSteps");
const averageMinutes = document.getElementById("averageMinutes");
const averageStairs = document.getElementById("averageStairs");
const averageOunces = document.getElementById("averageOunces");
const averageQuality = document.getElementById("averageQuality");
const averageHours = document.getElementById("averageHours");

const stepCount = document.getElementById("stepCount");
const minutesActive = document.getElementById("minutesActive");
const milesWalked = document.getElementById("milesWalked");
const stairsClimbed = document.getElementById("stairsClimbed");
const ouncesWater = document.getElementById("ouncesWater");
const hoursSlept = document.getElementById("hoursSlept");
const sleepQuality = document.getElementById("sleepQuality");

const weeklySteps = document.getElementById("weeklySteps");
const weeklyMinutes = document.getElementById("weeklyMinutes");
const weeklyFlights = document.getElementById("weeklyFlights");
const weeklyHours = document.getElementById("weeklyHours");
const weeklyQuality = document.getElementById("weeklyQuality");

// Event Listeners
window.addEventListener("load", setInitialPage)
datePicker.addEventListener("click", setDailyStats);

// Handlers/Helpers
function setInitialPage() {
  initializeDatePicker();
  renderPage();
}

function setDailyStats(event) {
  if (event.target.className === "day-btn") {
    const selectedDay = event.target.value;
    currentDate = selectedDay;

    renderPage();
  }
}
function initializeDatePicker() {
  const dates = datePicker.querySelectorAll("button");
  let startOfWeek = dayjs(currentDate).startOf("week");

  dates.forEach(day => {
    day.value = startOfWeek.format("YYYY/MM/DD");
    day.innerText = startOfWeek.format("MM/DD");
    startOfWeek = startOfWeek.add(1, "day");
  });
}

function renderPage() {
  renderUserInfo();
  renderFriends();
  renderTotalStats();
  renderDailyStats(currentDate);
  renderWeeklyProgress(currentDate);
}

function renderUserInfo() {
  const firstName = user.getFirstName();
  const avgStepGoal = userRepo.calcAvgStepGoal();

  greeting.innerText = `Hey, ${firstName}!`;
  strideLength.innerText = user.strideLength;
  stepComparison.innerText  = `${user.dailyStepGoal} / ${avgStepGoal}`;
}

function renderFriends() {
  friends.innerText = "";

  user.friends.forEach(friendID => {
    const friend = new User(userRepo.getUserData(friendID));
    const friendName = friend.getFirstName();
    const friendEl = document.createElement("li");

    friendEl.innerText = friendName;
    friends.appendChild(friendEl);
  });
}

function renderTotalStats() {
  renderTotalActivity();
  renderTotalHydration();
  renderTotalSleep();
}

function renderTotalActivity() {
  averageSteps.innerText = userActivity.calcTotalStat("numSteps");
  averageMinutes.innerText = userActivity.calcTotalStat("minutesActive");
  averageStairs.innerText = userActivity.calcTotalStat("flightsOfStairs");
}

function renderTotalHydration() {
  averageOunces.innerText = userHydration.calcAvgTotalOunces();
}

function renderTotalSleep() {
  averageQuality.innerText = userSleep.calcAvgTotalQuality();
  averageHours.innerText = userSleep.calcAvgTotalHrs();
}

function renderDailyStats(forDate) {
  renderDailyActivity(forDate);
  renderDailyHydration(forDate);
  renderDailySleep(forDate);
}

function renderDailyActivity(forDate) {
  const steps = userActivity.getDailyStat(forDate, "numSteps");
  const minutes = userActivity.getDailyStat(forDate, "minutesActive");
  const miles = userActivity.calcMilesWalked(forDate, user.strideLength);
  const flights = userActivity.getDailyStat(forDate, "flightsOfStairs");

  const avgUserSteps = userRepo.calcAvgStepGoal();
  const avgUserMinutes = activityRepo.calcAvgStat(forDate, "minutesActive");
  const avgUserMiles = activityRepo.calcAvgMiles(forDate, userData);
  const avgUserFlights = activityRepo.calcAvgStat(forDate, "flightsOfStairs");

  stepCount.innerText = `${steps} / ${avgUserSteps}`;
  minutesActive.innerText = `${minutes} / ${avgUserMinutes}`;
  milesWalked.innerText = `${miles} / ${avgUserMiles}`;
  stairsClimbed.innerText = `${flights} / ${avgUserFlights}`;
}

function renderDailyHydration(forDate) {
  ouncesWater.innerText = userHydration.findDailyOunces(forDate);
}

function renderDailySleep(forDate) {
  hoursSlept.innerText = userSleep.findDailyHrs(forDate);
  sleepQuality.innerText = userSleep.findDailyQuality(forDate);
}

function renderWeeklyProgress(forDate) {
  renderWeeklyActivity(forDate);
  renderWeeklyHydration(forDate);
  renderWeeklySleep(forDate);
}

function renderWeeklyActivity(forDate) {
  renderDisplays(weeklySteps, forDate, "numSteps")
  renderDisplays(weeklyMinutes, forDate, "minutesActive");
  renderDisplays(weeklyFlights, forDate, "flightsOfStairs");
}

function renderDisplays(statTable, forDate, stat) {
  const statDisplays = statTable.querySelectorAll("td");
  const weeklyStats = userActivity.getWeeklyStat(forDate, stat);

  statDisplays.forEach((display, index) => {
    if (weeklyStats[index]) {
      display.innerText = weeklyStats[index];
    }
  });
}

function renderWeeklyHydration(forDate) {
  const statDisplays = hydrationProgress.querySelectorAll("td");
  const weeklyHydration = userHydration.calcOuncesForWeek(forDate);

  statDisplays.forEach((display, index) => {
    if (weeklyHydration[index]) {
      display.innerText = weeklyHydration[index];
    }
  });
}

function renderWeeklySleep(forDate) {
  const hourDisplays = weeklyHours.querySelectorAll("td");
  const qualityDisplays = weeklyQuality.querySelectorAll("td");

  const foundHours = userSleep.findWeeklyHrs(forDate);
  const foundQuality = userSleep.findWeeklyQuality(forDate);

  hourDisplays.forEach((display, index) => {
    if (foundHours[index]) {
      display.innerText = foundHours[index];
    }
  });

  qualityDisplays.forEach((display, index) => {
    if (foundQuality[index]) {
      display.innerText = foundQuality[index];
    }
  });
}