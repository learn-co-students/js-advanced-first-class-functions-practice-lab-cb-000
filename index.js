// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const sortedDrivers = [...drivers];

  return sortedDrivers.sort(function(driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  });
}

function driversByName(drivers) {
  const sortedDrivers = [...drivers];

  const comparator = function(driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  };

  return sortedDrivers.sort(comparator);
}

function totalRevenue(drivers) {
  const revenueTotaller = function (total, currentDriver) {
    return total +  currentDriver.revenue;
  };

  return drivers.reduce(revenueTotaller, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
