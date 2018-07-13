// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach( (el) => { console.log(el.name)})
}

function logDriversByHometown(drivers, hometown) {
    drivers.forEach( (el) => {
      if (el.hometown == hometown) { console.log(el.name) }
    }
  )
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers]
  return driversCopy.sort((a,b) => {return a.revenue - b.revenue})
}

function driversByName(drivers) {
  const driversCopy = [...drivers]
  return driversCopy.sort((a,b) => {return a.name.localeCompare(b.name)})
}

function totalRevenue(drivers) {
  function callback(agg, el, i, arr) {
    return agg + el.revenue;
  }
  return drivers.reduce(callback, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
