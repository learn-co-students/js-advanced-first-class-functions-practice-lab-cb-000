// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(d) { console.log(d.name) } )
}

function logDriversByHometown(drivers, locale){
  drivers.forEach(function(d) {
    if(d.hometown === locale){
      console.log(d.name)
    }
  })
}

function driversByRevenue(drivers){
  const driversCopy = [...drivers];
  return driversCopy.sort(function(a, b){
    // debugger;
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers){
  const driversCopy = [...drivers];
  return driversCopy.sort(function(a, b){
    // debugger;
    return a.name.localeCompare(b.name);
  })
}



function totalRevenue(drivers){
  return drivers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.revenue;
  }, 0)
}


function averageRevenue(drivers){
  return drivers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.revenue;
  }, 0)/drivers.length
}
