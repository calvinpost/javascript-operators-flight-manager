"use strict"

function Prices() {
  function calculateFinalPrice(base, varPassType, varFlightType) {
    let passPercent = varPassType/100;
    let flightPercent = varFlightType/100;
    return base + passPercent * base + flightPercent * (base + passPercent * base);
  }

  function calculateDefaultFinalPrice(base, passType, flightType) {
    let pass = passType.toLowerCase();
    let flight = flightType.toLowerCase();
    let varPassType = pass == 'regular' ? -5 : pass == 'vip' ? 5 : 0;
    let varFlightType = flight == 'economy' ? -3 : flight == 'business' ? 10 : 0;

    return calculateFinalPrice(base, varPassType, varFlightType);
  }

  function calculateTotalFinalPrice(seats, passType, flightType, base) {
    return seats * calculateDefaultFinalPrice(base, passType, flightType);
  }

  return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();