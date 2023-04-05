function Util() {
  function calculateTotalDistributedPassengers(obj) {
    return Object.values(obj).reduce((sum = 0, pass) => sum += pass);
  }

  function calculateTotalNumberOfPassengers(passengers) {
    return passengers.reduce((sum = 0, pass) => sum += pass);
  }

  return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();