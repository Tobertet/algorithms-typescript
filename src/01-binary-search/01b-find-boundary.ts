// Given an array of booleans sorted by false -> true, find the last appearance of false.
const findBoundary1: (array: boolean[]) => number = (array) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let boundaryIndex = -1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (array[midIndex] === false) {
      boundaryIndex = midIndex;
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return boundaryIndex;
};

console.log(findBoundary1([false, false, true]));
