function merge(array1, array2) {
  let mergedArray = []; // 1 
  let i = 0; // 1 
  let j = 0; // 1 
  while (i < array1.length && j < array2.length) { // 7
    if (array1[i] < array2[j]) { // 5
      mergedArray.push(array1[i]); // 4
      i++; // 1
    } else {
      mergedArray.push(array2[j]); // 4
      j++; //1
    }
  }
  while (i < array1.length) { //3 
    mergedArray.push(array1[i]); //4
    i++; //1
  }
  while (j < array2.length) { // 3
    mergedArray.push(array2[j]); // 4
    j++;// 1
  }
  return mergedArray; // 1
}


// T =  1 + 1 + 1 + (7 + 5 + 4 + 1 + 4 + 1) * n + (3 + 4 + 1)*n + (3 + 4 + 1) * n + 1
// O(1) + O(n) + O(n) + O(n)
// comme O(1) << O(n) le Compléxité est O(n)



module.exports = { merge };
