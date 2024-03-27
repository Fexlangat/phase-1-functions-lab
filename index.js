// Code your solution in this file!

function distanceFromHqInBlocks(pickLocation) {
  const headq = 42;
  return Math.abs(pickLocation - headq);
}

function distanceFromHqInFeet(pickLocation) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(pickLocation) * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;
  return Math.abs(endBlock - startBlock) * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let fare;

  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25;
  } else {
    return "cannot travel that far";
  }

  return stay;
}
