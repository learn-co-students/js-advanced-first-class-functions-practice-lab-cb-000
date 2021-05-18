// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(one, two) {
    return one.revenue - two.revenue;
  });
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function(one, two) {
return one.name.localeCompare(two.name)  
  })
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total
  }, 0)
}


const averageRevenue = function(drivers) {
 return totalRevenue(drivers) / drivers.length
}