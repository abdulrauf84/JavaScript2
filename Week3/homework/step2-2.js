'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i < stopIndex + 1; i++) {
    numbers.push(i);
  }
  numbers.map(function(number) {
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
    return null;
  });
}

function sayThree(number) {
  console.log(number + ' is divisble by 3');
}

function sayFive(number) {
  console.log(number + ' is is divisble by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
