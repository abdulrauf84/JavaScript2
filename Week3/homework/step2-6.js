'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  let flattened2d = [];
  arr.forEach(value => {
    if (Array.isArray(value)) {
      flattened2d = flattened2d.concat(flattenArray2d(value));
    } else {
      flattened2d.push(value);
    }
  });
  return flattened2d;
}

function flattenArray3d(arr) {
  let flattened3d = [];
  arr.forEach(value => {
    if (Array.isArray(value)) {
      flattened3d = flattened3d.concat(flattenArray3d(value));
    } else {
      flattened3d.push(value);
    }
  });
  return flattened3d;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
