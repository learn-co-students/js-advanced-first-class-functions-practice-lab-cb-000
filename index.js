// Code your solution in this file!
const logDriverNames = (drivers) => {
  drivers.forEach((driver) => {
    console.log(driver.name);
  });
};

const logDriversByHometown = (drivers, hometown) => {
  const matchingDrivers = drivers.filter((driver) => {
    return driver.hometown === hometown;
  });

  logDriverNames(matchingDrivers);
};

const driversByRevenue = (drivers) => {
  return [...drivers].sort((a, b) => {
    return a.revenue - b.revenue
  });
};

const driversByName = (drivers) => {
  return [...drivers].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = (drivers) => {
  return drivers.reduce((accumulator, driver) => {
    return accumulator + driver.revenue
  }, 0);
};

const averageRevenue = (drivers) => {
  return totalRevenue(drivers) / drivers.length;
};
