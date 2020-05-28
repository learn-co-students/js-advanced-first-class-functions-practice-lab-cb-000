
/* function logDriverNames(driversArray) {
  driversArray.forEach(driver => {
    console.log(driver['name']);
  });
} */

function logDriverNames(driversArray) {
  driversArray.forEach(function(driver) {
    console.log(driver['name']);
  }); 
}

/* function logDriverNames(driversArray) {
  driversArray.forEach(driver => {console.log(driver['name']);}); 
} */

function logDriversByHometown(driversArray, location) {
  driversArray.forEach(function(driver) {
    if (driver['hometown'] === location) {
      console.log(driver['name']);
    }
  });
}

function driversByRevenue(driversArray) {
  return driversArray.slice().sort(function(a,b) {
    return a['revenue'] - b['revenue'];
  });
}

/* function driversByRevenue(driversArray) {
  return driversArray.slice().sort((a,b) => a['revenue'] - b['revenue']);
} */

function driversByName(driversArray) {
  return driversArray.slice().sort(function(a,b) {
    return a['name'].localeCompare(b['name']);
  });
}

function totalRevenue(driversArray) {
  return driversArray.reduce(function(sum, driver) {
    return sum + driver['revenue'];
  }, 0);
}

function averageRevenue(driversArray) {
  return totalRevenue(driversArray) / driversArray.length;
}