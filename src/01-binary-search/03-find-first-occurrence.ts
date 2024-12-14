const findFirstOccurrence = (array: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let firstOccurrenceIndex = -1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (array[midIndex] === target) {
      firstOccurrenceIndex = midIndex;
    }
    if (array[midIndex] >= target) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return firstOccurrenceIndex;
};

console.log(findFirstOccurrence([1, 3, 3, 3, 3, 4, 5, 6], 3));
