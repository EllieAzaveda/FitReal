// Imports
import UserRepository from "./UserRepository.js";
import ActivityRepository from "./ActivityRepository.js";
import HydrationRepository from "./HydrationRepository.js";
import SleepRepository from "./SleepRepository.js";

import User from "./User.js";
import UserActivity from "./UserActivity.js";
import UserHydration from "./UserHydration.js";
import UserSleep from "./UserSleep.js";

// Dependents
const userRepo = new UserRepository(userData);
const activityRepo = new ActivityRepository(activityData);
const hydrationRepo = new HydrationRepository(hydrationData);
const sleepRepo = new SleepRepository(sleepData);

const user = new User(userRepo.getUserData(userID));
const userActivity = new UserActivity(activityRepo.getUserData(userID));
const userHydration = new UserHydration(hydrationRepo.getUserData(userID));
const userSleep = new UserSleep(sleepRepo.getUserData(userID));

const userID = 1;

// Query Selectors
const greeting = document.getElementById("greeting");


// Handlers/Helpers