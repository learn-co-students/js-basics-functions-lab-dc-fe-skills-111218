// Code your solution in this file!


// HQ proximity to customers //

function distanceFromHqInBlocks(pickupBl) {
  return Math.abs(pickupBl - 42);
}

function distanceFromHqInFeet(pickupBl) {
  return distanceFromHqInBlocks(pickupBl) * 264;
}




// Distance travelled //

function distanceTravelledInFeet(start, end) {
 let distance = Math.abs(start - end);
 return distance * 264;
}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) > 2500) {
    return 'cannot travel that far';
  } else if (distanceTravelledInFeet(start, end) > 2000) {
    return 25;
  } else if (distanceTravelledInFeet(start, end) > 400) {
    return (distanceTravelledInFeet(start, end) - 400) * 0.02;
  } else if (distanceTravelledInFeet(start, end) <= 400) {
    return 0;
  }
}