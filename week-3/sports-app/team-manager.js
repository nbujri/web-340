// ==========================================================
//     ; Title: Assignment 3.2
//     ; Author: Ngi Bujri
//     ; Date: 21 January, 2023
//     ; Description: app demonstrating Node modules
// ==========================================================

"use strict";

// import Team class
const teamModule = require("./team.js");

// create array of Teams
let teams = [
  new teamModule.Team("Alabama", "Crimson Tide", 54),
  new teamModule.Team("LSU", "Tigers", 54),
  new teamModule.Team("Georgia", "Bulldogs", 54),
  new teamModule.Team("Texas", "Longhorns", 54),
  new teamModule.Team("USC", "Trojans", 54),
];

// return array
function getTeams() {
  return teams;
}

// return a team object by given team name
function getTeam(name) {
  return teams.find((currentTeam) => currentTeam.name === name);
}

// return a formatted string displaying team properties
function displayTeam(team) {
  return `Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}\n`;
}

module.exports = { getTeams, getTeam, displayTeam };
