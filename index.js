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
  if (400 < feet <= 2000) {
    result = (feet - 400) * 0.2;
  } else if (2000 < feet < 2500) {
    result = "Flat fee.";
  } else if (feet > 2500) {
    result = 'cannot travel tht far.';
  }
  
  return result;
}
