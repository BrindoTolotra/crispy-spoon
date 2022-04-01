const { arrayContain } = require('./3-array-contain');

function generateUnorderedArray(size) {
  let array = []; // 1
  for (let i = 0; i < size; i++) { // 5
    let number = Math.floor(Math.random() * 100); // 3
    while (arrayContain(array, number)) { 
      number = Math.floor(Math.random() * 100); // 3
    }
    array.push(number); // 2
  }
  return array; // 1
}

module.exports = { generateUnorderedArray };

/*
1 + (5 + 3 + O(n) + 3) * n + 2 + 1 
O(1) + (O(1) + O(n)) * O(n) + O(1) 
La compléxité et de O(n) * O(n) donc O(n^2)
*/
