function slice(array, start, end) {
  let slicedArray = []; // 1
  for (let i = start; i < end; i++) { // 6
    slicedArray.push(array[i]); // 4
  }
  return slicedArray; // 1
}

module.exports = { slice }; 

/* comme O(1) << O(n), la compléxité de cette algorithme et O(n)
      n * (6+4) + 1 
      => n * (10) + 1
      => O(n) * (O(1) + (O(1))
      la compléxité de cette algorithme et O(n)
*/
