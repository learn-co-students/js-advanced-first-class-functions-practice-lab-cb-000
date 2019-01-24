function logDriverNames(drivers) {
  drivers.forEach(function (elem) {
    console.log(elem.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (elem){
    if (elem.hometown === hometown){
    console.log(elem.name);}
  });
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort(function (elem1, elem2){
    return elem1.revenue - elem2.revenue;
  });
}

function driversByName(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort( function (a, b){
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  const getRevenue = function (accumulator, currValue) {
    return accumulator + currValue.revenue;
  };

  return drivers.reduce(getRevenue,0)
}

function averageRevenue(drivers) {
  const allRevenue = totalRevenue(drivers);
  return allRevenue / drivers.length;
}
