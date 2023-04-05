"use strict"

function Util() {
  function calculateTotalDistributedPassengers(obj) {
    return Object.values(obj).reduce((sum = 0, pass) => sum += pass);
  }

  function calculateTotalNumberOfPassengers(passengers) {
    return passengers.reduce((sum = 0, pass) => sum += pass);
  }

  function checkInput(input) {
    if (input.isEmpty() || input.isNaN()) {
      throw new Error("Input must be a number")
    }
  }

  function calculateTotalDistance(distances) {
    return distances.reduce((sum = 0, dist) => sum += dist > 0 ? dist : 0);
  }

  function calculateBonusPoints(distBusiness, distEconomy, busBonus, ecoBonus) {
    let ecoPercent = ecoBonus/100;
    let busPercent = busBonus/100;
    return busPercent * calculateTotalDistance(distBusiness) + ecoPercent * calculateTotalDistance(distEconomy);
  }

  return {
    calculateTotalDistributedPassengers, 
    calculateTotalNumberOfPassengers, 
    checkInput, 
    calculateTotalDistance,
    calculateBonusPoints
  };
}

module.exports = Util();