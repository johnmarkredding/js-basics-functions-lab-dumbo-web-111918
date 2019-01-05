// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let result;
  if (street - 42 >= 0) {
    result = street - 42;
  } else {
    result = 42 - street;
  }
  return result;
}

function distanceFromHqInFeet(street) {
  return distanceTravelledInFeet(street, 42);
}

function distanceTravelledInFeet(street1, street2) {
  let result;
  if (street1 - street2 >= 0) {
    result = (street1 - street2) * 264;
  } else {
    result = (street2 - street1) * 264;
  }
  return result;
}

function calculatesFarePrice(start, destination) {
  let result;
  let feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    result = 0;
  } else if (feet < 2000) {
    result = (feet - 400) * 0.02;
  } else if (feet < 2500) {
    result = 25;
  } else {
    result = 'cannot travel that far';
  }
  return result;
}
