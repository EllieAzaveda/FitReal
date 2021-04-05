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

// Event Listeners
window.addEventListener("load", renderInitialPage);

// Handlers/Helpers
function renderInitialPage() {
  renderUserInfo();
  renderFriends();
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