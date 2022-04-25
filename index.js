// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(pickupBlock) {
  return Math.abs(hqLocation - pickupBlock);
}

function distanceFromHqInFeet(pickupBlock) {
  return distanceFromHqInBlocks(pickupBlock) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice(block1, block2) {
  const feetDistance = distanceTravelledInFeet(block1, block2);

  switch (true) {
    case feetDistance < 400:
      return 0;
      break;
    case feetDistance < 2000:
      return .02 * (feetDistance - 400);
      break;
    case feetDistance < 2500:
      return 25;
      break;
    default:
      return 'cannot travel that far';
      break;
  }
}

console.log(distanceTravelledInFeet(34, 32));
console.log(calculatesFarePrice(34, 32));