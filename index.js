// Code your solution in this file!


function distanceFromHqInBlocks(block) {
  let result
  if (block >= 42) {
    result = block - 42;
  } else {
    result = 42 - block;
  }
  return result;
}

distanceFromHqInBlocks()


function distanceFromHqInFeet(block) {
  let result = distanceFromHqInBlocks(block) * 264;
  return result;
}

distanceFromHqInFeet()


function distanceTravelledInFeet(start, end) {
  let result; 
  if (start > end) {
    result = (start - end) * 264; 
  } else {
    result = (end - start) * 264;
  }
  return result;
}

distanceTravelledInFeet()


function calculatesFarePrice(start, end) {
  let result;
  if (distanceTravelledInFeet(start, end) < 400) {
    result = 0; 
  } else if (distanceTravelledInFeet(start, end) >= 400 && distanceTravelledInFeet(start, end) <= 2000) {
    result = (distanceTravelledInFeet(start, end) - 400) * 0.02;
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500) {
    result = 25;
  } else if (distanceTravelledInFeet(start, end) > 2500) {
    result = "cannot travel that far";
  }
  return result;
}

calculatesFarePrice()
