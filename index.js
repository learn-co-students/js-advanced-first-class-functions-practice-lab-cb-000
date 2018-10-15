const newArrayForDrivers = function(drivers) {
  let newArray = [];

  drivers.forEach(driver => newArray.push(driver));

  return newArray;
}

function sumUp() {

}

const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(driver => ((driver.hometown === town) ? console.log(driver.name) : 0));
}

const driversByRevenue = function(drivers) {
  return newArrayForDrivers(drivers).sort((a, b) => a.revenue - b.revenue);
}

const driversByName = function(drivers) {
  return newArrayForDrivers(drivers).sort((a, b) => a.name.localeCompare(b.name));
}

const totalRevenue = function(drivers) {
  let newArray = [];

  drivers.forEach(driver => newArray.push(driver.revenue));

  return newArray.reduce((a, b) => a + b);
}

const averageRevenue = function(drivers) {
  return (totalRevenue(drivers) / drivers.length);
}
