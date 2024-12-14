const searchRange = (array: number[], target: number): [number, number] => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let minIndex = -1;
  let maxIndex = -1;

  // Start looking for the minIndex
  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (array[midIndex] === target) {
      minIndex = midIndex;
    }
    if (array[midIndex] >= target) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  leftIndex = 0;
  rightIndex = array.length - 1;

  // Start looking for the maxIndex
  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (array[midIndex] === target) {
      maxIndex = midIndex;
    }
    if (array[midIndex] <= target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return [minIndex, maxIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
