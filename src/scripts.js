/* eslint-disable no-undef */

// Dependents
const userID = 20;
const currentDate = "2019/09/22"

const userRepo = new UserRepository(userData);
const activityRepo = new ActivityRepository(activityData);
const hydrationRepo = new HydrationRepository(hydrationData);
const sleepRepo = new SleepRepository(sleepData);

const user = new User(userRepo.getUserData(userID));
const userActivity = new UserActivity(activityRepo.getUserData(userID));
const userHydration = new UserHydration(hydrationRepo.getUserData(userID));
const userSleep = new UserSleep(sleepRepo.getUserData(userID));

// Query Selectors
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

// Event Listeners
window.addEventListener("load", renderInitialPage);

// Handlers/Helpers
function renderInitialPage() {
  renderUserInfo();
  renderFriends();
  renderTotalStats();
  renderDailyStats(currentDate);
}

function renderUserInfo() {
  const firstName = user.getFirstName();
  const avgStepGoal = userRepo.calcAvgStepGoal();

  greeting.innerText = `Hey, ${firstName}!`;
  strideLength.innerText = user.strideLength;
  stepComparison.innerText  = `${user.dailyStepGoal} / ${avgStepGoal}`;
}

function renderFriends() {
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