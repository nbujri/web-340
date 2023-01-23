// ==========================================================
//     ; Title: Assignment 3.2
//     ; Author: Ngi Bujri
//     ; Date: 21 January, 2023
//     ; Description: app demonstrating Node modules
// ==========================================================

"use strict";

// import team-manager
const teamManager = require("./team-manager.js");

// get array from team-manager.js
const teams = teamManager.getTeams();

console.log("-- DISPLAYING TEAMS --");
// loop through teams
for (let team of teams) {
  // print team using displayTeam())
  console.log(teamManager.displayTeam(team));
}

// assign two variables to a team using getTeam()
const teamOne = teamManager.getTeam("Texas");
const teamTwo = teamManager.getTeam("Georgia");

// print teamOne and teamTwo
console.log("-- DISPLAYING A SINGLE TEAM --");
console.log(teamManager.displayTeam(teamOne));
console.log("-- DISPLAYING A SINGLE TEAM --");
console.log(teamManager.displayTeam(teamTwo));
