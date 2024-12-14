// The difference with 02 is that the array is sorted descenently
const firstNotSmaller = (array: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let firstNotSmallerIndex = -1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (array[midIndex] >= target) {
      firstNotSmallerIndex = midIndex;
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return firstNotSmallerIndex;
};

// [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// [  T, T, T, T, T, T, F, F, F, F]

console.log(Array.from({ length: 10 }, (value, index) => 10 - index));

console.log(
  firstNotSmaller(
    Array.from({ length: 10 }, (value, index) => 10 - index),
    4.5
  )
);
