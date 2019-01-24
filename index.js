// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks (blocks) * 264;
}

function distanceTravelledInFeet (startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice (startBlock, endBlock) {
   if (distanceTravelledInFeet(startBlock, endBlock)<400) {
     return 0;
   }
   if (distanceTravelledInFeet(startBlock, endBlock)> 2500) {
    return 'cannot travel that far'; }
  if (distanceTravelledInFeet(startBlock, endBlock)> 2000) {
    return 25;
  }
  if (distanceTravelledInFeet(startBlock, endBlock)> 400) {
    return (distanceTravelledInFeet(startBlock, endBlock) - 400) *.02;
  }
}