const peakOfMountain = (array: number[]): number => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let peakIndex = -1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (midIndex === rightIndex || array[midIndex] > array[midIndex + 1]) {
      peakIndex = midIndex;
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return peakIndex;
};

console.log(peakOfMountain([1, 2, 3, 4, 3, 2]));
console.log(peakOfMountain([3, 2, 1]));
console.log(peakOfMountain([1, 2, 3]));

// [1, 2, 3, 4, 3, 2]
// [F, F, F, T, T, T] the element after me is lesser than me or I am the last one
// [3, 2, 1]
// [T, T, T]
// [1, 2, 3]
// [F, F, T]
