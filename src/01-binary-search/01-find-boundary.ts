// Given an array of booleans sorted by false -> true, find the first appearance of true.
// The difference from the vanilla, is that when we find the element that matches, there could be
// another element matching before it.
const findBoundary1: (array: boolean[]) => number = (array) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let boundaryIndex = -1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (array[midIndex] === true) {
      boundaryIndex = midIndex;
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return boundaryIndex;
};

console.log(findBoundary1([false, false, true]));
