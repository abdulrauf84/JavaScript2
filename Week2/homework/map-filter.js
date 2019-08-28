'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  let newNumbers = [];
  numbers.map(odd => {
    if (odd % 2 !== 0) {
      newNumbers.push(odd * 2);
    }
  });
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
