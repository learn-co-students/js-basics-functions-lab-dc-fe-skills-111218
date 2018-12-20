// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  let distanceBlocks = someValue - 42
  return Math.abs(distanceBlocks);
}

function distanceFromHqInFeet (someValue) {
  let distanceFeet = (someValue - 42) * 264
  return Math.abs(distanceFeet)
}

function distanceTravelledInFeet(startValue, endValue) {
  let distanceFeet = (endValue - startValue) * 264
  return Math.abs(distanceFeet);
}

function calculatesFarePrice (start, destination) {
  let actualDistance = (Math.abs(destination - start)) * 264
  let farePrice = (((Math.abs(destination - start)) * 264) - 400)* 0.02
  if (actualDistance >=2500) {return "cannot travel that far"}
  if (actualDistance >=2000) {return 25}
  if (actualDistance <=400) {return 0}
  if (actualDistance <=2000) {return farePrice}
}

//<= 400 is free, 400 - 2000 2 cents per foot, >2500 is 25 dollars
// return Math.abs(distanceFeet)
