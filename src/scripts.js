/* eslint-disable no-undef */

// Imports
// const UserRepository = require("./UserRepository.js");
// const ActivityRepository = require("./ActivityRepository.js");
// const HydrationRepository = require("./HydrationRepository.js");
// const SleepRepository = require("./SleepRepository.js");

// const User = require("./User.js");
// const UserActivity = require("./UserActivity.js");
// const UserHydration = require("./UserHydration.js");
// const UserSleep = require("./UserSleep.js");
// import UserRepository from "./UserRepository.js";
// import ActivityRepository from "./ActivityRepository.js";
// import HydrationRepository from "./HydrationRepository.js";
// import SleepRepository from "./SleepRepository.js";

// import User from "./User.js";
// import UserActivity from "./UserActivity.js";
// import UserHydration from "./UserHydration.js";
// import UserSleep from "./UserSleep.js";

// Dependents
const userID = 1;
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
const ouncesWater = document.getElementById("ouncesWater")

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
  averageSteps.innerText = userActivity.calcTotalStat("numSteps");
  averageMinutes.innerText = userActivity.calcTotalStat("minutesActive");
  averageStairs.innerText = userActivity.calcTotalStat("flightsOfStairs");

  averageOunces.innerText = userHydration.calcAvgTotalOunces();

  averageQuality.innerText = userSleep.calcAvgTotalQuality();
  averageHours.innerText = userSleep.calcAvgTotalHrs();
}

function renderDailyStats(forDate) {
  renderDailyActivity();
  renderDailyHydration();
  renderDailySleep();
}

function renderDailyActivity(forDate) {
  const strideLength = user.strideLength;

  const stepCount = userActivity.getDailyStat(forDate, "numSteps");
  const minutesActive = userActivity.getDailyStat(forDate, "minutesActive");
  const milesWalked = userActivity.calcMilesWalked(forDate, strideLength);
  const flightsClimbed = userActivity.getDailyStat(forDate, "flightsOfStairs");

  const avgUserCount = userRepo.calcAvgStepGoal();
  const avgUserMinutes = activityRepo.calcAvgStat("minutesActive");
  const avgUserMiles = activityRepo.calcAvgMiles(forDate, userData);
  const avgUserFlights = activityRepo.calcAvgStat("flightsOfStairs");
  

  stepCount.innerText = userActivity.getStepCount(forDate);
  minutesActive.innerText = userActivity.getMinutesActive(forDate);
  milesWalked.innerText = userActivity.calcMilesWalked(forDate, strideLength);
}

function renderDailyHydration() {
  ouncesWater.innerText = userHydration.findDailyOunces(forDate);
}

function renderDailySleep() {
  
}