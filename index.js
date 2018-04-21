// logs the name of each driver
let logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};


// logs the name of each driver whose hometown matches the passed-in argument
let logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};


// uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
// why use .slice() ? --> (test error: MAKE SURE ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE) --> "after each" hook for "uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)"
let driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};


// uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)
// why use .slice() ? --> (test error: MAKE SURE ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE) --> "after each" hook for "uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)"
/*
  localeCompare allows case-insensitive sorting of an array.
  (source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

  'a'.localeCompare('A') //=> -1
  'a'.localeCompare('a') //=> 0
  'A'.localeCompare('a') //=> 1
*/
let driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

// uses the reduce() method to sum the revenue of every driver and return the total
// initial value of 'total' is 0; for each driver, add the driver's revenue to 'total', returning sum of 'total' each time
let totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};


// calculates the average revenue across all drivers
// use sum of revenue from all drivers --> totalRevenue()
// divided by amount of all drivers --> drivers.length
let averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
