const findTheOldest = function (people) {
  // reduce() with accum = oldest person each iteration, true if is older
  return people.reduce((accum, curr) => {
    const currDeathDate = curr?.yearOfDeath || new Date().getFullYear();
    const currAge = currDeathDate - curr.yearOfBirth;
    const accumDeathDate = accum?.yearOfDeath || new Date().getFullYear();
    const accumAge = accumDeathDate - accum.yearOfBirth;
    accum = currAge > accumAge ? curr : accum;
    return accum;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
