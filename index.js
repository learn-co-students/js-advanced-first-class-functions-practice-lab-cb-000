// Code your solution in this file!
function logDriverNames(drivers){
  const logNames = function (driver){ console.log(driver.name) }
  let array = drivers.forEach(logNames);
}

function logDriversByHometown(drivers, hometown){
  const callback = function(driver){
    if (driver.hometown == hometown) {
      console.log(driver.name);
    }
  }
  drivers.forEach(callback);
}

function driversByRevenue(drivers){
  const callback = function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  }
  return drivers.slice().sort(callback);
}

function driversByName(drivers){
  const callback = function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name)
  }
  return drivers.slice().sort(callback);
}

function totalRevenue(drivers){
  const callback = function(agg, el){
    return agg + el.revenue
  }
  return drivers.reduce(callback, 0);
}

function averageRevenue(drivers){
  const callback = function(agg, el, i){
    return agg + el.revenue
  }
  return drivers.reduce(callback, 0)/drivers.length;
}
