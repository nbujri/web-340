// ==========================================================
//     ; Title: Assignment 3.2
//     ; Author: Ngi Bujri
//     ; Date: 21 January, 2023
//     ; Description: app demonstrating Node modules
// ==========================================================

"use strict";

class Team {
  constructor(name, mascot, playerCount) {
    this.name = name;
    this.mascot = mascot;
    this.playerCount = playerCount;
  }
}

module.exports = { Team };
