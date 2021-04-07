/* eslint-disable no-undef */

// Dependents
let userID = 20;
let currentDate = "2019/09/22"

const userRepo = new UserRepository(userData);
const activityRepo = new ActivityRepository(activityData);
const hydrationRepo = new HydrationRepository(hydrationData);
const sleepRepo = new SleepRepository(sleepData);

const user = new User(userRepo.getUserData(userID));
const userActivity = new UserActivity(activityRepo.getUserData(userID));
const userHydration = new UserHydration(hydrationRepo.getUserData(userID));
const userSleep = new UserSleep(sleepRepo.getUserData(userID));

// Query Selectors
const datePicker = document.getElementById("datePicker");
const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");

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

const userAvgSteps = document.getElementById("userAvgSteps");
const userAvgMin = document.getElementById("userAvgMin");
const userAvgMiles = document.getElementById("userAvgMiles");
const userAvgStairs = document.getElementById("userAvgStairs");

// Event Listeners
window.addEventListener("load", setInitialPage)

datePicker.addEventListener("click", setDailyStats);
backButton.addEventListener("click", moveBackwards);
forwardButton.addEventListener("click", moveForwards);

// Handlers/Helpers
function setInitialPage() {
  setDatePicker();
  renderPage();
}

function setDailyStats(event) {
  const isButton = event.target.className === "day-btn";
  const notAfter = dayjs(event.target.value).diff(dayjs("2019/09/22")) <= 0;
  const notBefore = dayjs(event.target.value).diff(dayjs("2019/06/15")) >= 0;

  if (isButton && notAfter && notBefore) {
    const selectedDay = event.target.value;
    currentDate = selectedDay;

    toggleDate();
    renderPage();
  }
}

function moveBackwards() {
  let startOfWeek = dayjs(currentDate).startOf("week").format("YYYY/MM/DD");

  if (startOfWeek === "2019/06/16") {
    currentDate = "2019/06/15";
  } else {
    currentDate = dayjs(currentDate).subtract(7, "days").format("YYYY/MM/DD");
  }

  setDatePicker();
  renderPage();
}

function moveForwards() {
  let startOfWeek = dayjs(currentDate).startOf("week").format("YYYY/MM/DD");

  if (startOfWeek === "2019/09/15") {
    currentDate = "2019/09/22";
  } else {
    currentDate = dayjs(currentDate).add(7, "days").format("YYYY/MM/DD");
  }

  setDatePicker();
  renderPage();
}

function setDatePicker() {
  const dates = datePicker.querySelectorAll(".day-btn");
  let startOfWeek = dayjs(currentDate).startOf("week");

  dates.forEach(day => {
    day.value = startOfWeek.format("YYYY/MM/DD");
    day.innerText = startOfWeek.format("MM/DD");
    startOfWeek = startOfWeek.add(1, "day");
  });

  toggleDate();
  setNavButtons();
}

function toggleDate() {
  const dates = datePicker.querySelectorAll(".day-btn");
  
  dates.forEach(day => {
    if (day.value === currentDate) {
      day.className = "day-btn selected";
    } else {
      day.className = "day-btn";
    }
  });
}

function setNavButtons() {
  const endOfWeek = dayjs(currentDate).endOf("week");
  const startOfWeek = dayjs(currentDate).startOf("week");

  if (endOfWeek.diff(dayjs("2019/06/16")) <= 0) {
    backButton.className = "nav-btn invisible";
  } else {
    backButton.className = "nav-btn";
  }

  if (startOfWeek.diff(dayjs("2019/09/22")) >= 0) {
    forwardButton.className = "nav-btn invisible";
  } else {
    forwardButton.className = "nav-btn";
  }
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
  const avgStepGoal = Math.round(userRepo.calcAvgStepGoal());

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
  const miles = userActivity.calcMilesWalked(forDate, user.strideLength).toFixed(2);
  const flights = userActivity.getDailyStat(forDate, "flightsOfStairs");

  const avgUserSteps = userRepo.calcAvgStepGoal();
  const avgUserMinutes = activityRepo.calcAvgStat(forDate, "minutesActive");
  const avgUserMiles = activityRepo.calcAvgMiles(forDate, userData).toFixed(2);
  const avgUserFlights = activityRepo.calcAvgStat(forDate, "flightsOfStairs");

  stepCount.innerText = `${steps}`;
  userAvgSteps.innerText = `${avgUserSteps}`;

  minutesActive.innerText = `${minutes}`;
  userAvgMin.innerText = `${avgUserMinutes}`;

  milesWalked.innerText = `${miles}`;
  userAvgMiles.innerText = `${avgUserMiles}`;

  stairsClimbed.innerText = `${flights}`;
  userAvgStairs.innerText = `${avgUserFlights}`;
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
  renderTable(weeklySteps, forDate, "numSteps")
  renderTable(weeklyMinutes, forDate, "minutesActive");
  renderTable(weeklyFlights, forDate, "flightsOfStairs");
}

function renderTable(statTable, forDate, stat) {
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
