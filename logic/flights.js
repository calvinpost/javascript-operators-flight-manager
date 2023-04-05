"use strict"

function Flights() {
  function calculateNumberOfFlights(passengers, capacity) {
    if (passengers < 0 || !Number.isInteger(passengers)) {
      throw new Error("The number of passengers must be a positive integer value.");
    }
    if (capacity < 0 || !Number.isInteger(capacity)) {
      throw new Error("The capacity of the flight must be a positive integer value.");
    }
    return passengers%capacity === 0 ? passengers/capacity : Math.ceil(passengers/capacity);
  }

  function checkAircraftRevision(limit, distances) {
    let total = distances.reduce((total = 0, distance) => total + distance);
    if (total <= limit/2) {
      return "The revision needs to be done within the next 3 months";
    } else if (total <= limit*0.75) {
      return "The revision needs to be done within the next 2 months";
    } else if (total <= limit) {
      return "The revision needs to be done within the next month";
    } else {
      throw new Error("Error, total distance exceeds limit");
    }
  }

  return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();