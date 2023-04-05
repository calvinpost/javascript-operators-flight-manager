"use strict"

function Passengers() {
  function checkFlightCapacity(capacity, passengerNums) {
    let total = passengerNums.reduce((sum = 0, num) => sum += num);
    if (total < capacity) {
      return total;
    } else {
      throw new Error("Passengers exceeded capacity");
    }
  }

  function distributeAllSeatsToAllPassengers(vips, passengers, flights, business, economy) {
    let vip = vips;
    let reg = passengers;
    let bus = business * flights;
    let eco = economy * flights;

    // Get VIP Business
    let vipBus = vip > bus ? bus : vip;
    bus -= vipBus;
    vip -= vipBus;

    // Get VIP Economy
    let vipEco = vip > eco ? eco : vip;
    eco -= vipEco;
    vip -= vipEco;

    // Get Regular Business
    let regBus = reg > bus ? bus : reg;
    reg -= regBus;

    // Get Regular Economy
    let regEco = reg > eco ? eco : reg;

    return {
      vipPassengersWithBusinessSeats: vipBus,
      vipPassengersWithEconomySeats: vipEco,
      regularPassengersWithBusinessSeats: regBus,
      regularPassengersWithEconomySeats: regEco
    };
  }

  return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();

