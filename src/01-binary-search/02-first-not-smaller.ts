const firstNotSmaller = (array: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let firstNotSmallerIndex = -1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (array[midIndex] >= target) {
      firstNotSmallerIndex = midIndex;
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return firstNotSmallerIndex;
};

console.log(Array.from({ length: 10 }, (value, index) => index));

console.log(
  firstNotSmaller(
    Array.from({ length: 10 }, (value, index) => index),
    4.5
  )
);
