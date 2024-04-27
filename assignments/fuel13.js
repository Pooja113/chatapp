let calculateFuel = (distance) => {
  fuelNeeded = distance * 10;

  if (fuelNeeded > 100) {
    return fuelNeeded;
  }
  return 100;
};

console.log(calculateFuel(8));
