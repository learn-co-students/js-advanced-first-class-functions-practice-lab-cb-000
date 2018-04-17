// Code your solution in this file!
function logDriverNames(list) {
  list.forEach(function (element) {
    console.log(element.name)
  })
}

function logDriversByHometown(list, town) {
  let matches = list.filter(function(element) {
    return element.hometown === town
  })
  logDriverNames(matches)
}

function driversByRevenue(list) {
  let copy = [...list]
  return copy.sort(function(a, b) {
    return a["revenue"] - b["revenue"]
  })
}

const driversByName = function(list) {
 let copy = [...list]
 return copy.sort(function(a, b) {
   return (a["name"] > b["name"]) - (a["name"] < b["name"])
 })
}

function totalRevenue(list) {
  return list.reduce(revenue, 0)
}

const revenue = function(total, element) {
  return total + element["revenue"]
}

function averageRevenue(list) {
  let total = totalRevenue(list)
  return total / list.length
}
