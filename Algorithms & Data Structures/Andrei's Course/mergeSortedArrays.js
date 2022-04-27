// Given two sorted arrays, merge them together and keep them sorted

function mergeSortedArrays(arr1, arr2) {
  let newArr = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(newArr);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);