/* NOTE: This wouldn't be a good solution as it wouln't work for non-rotated arrays

if (array[midIndex] <= array[0]) {
  boundaryIndex = midIndex;
  leftIndex = midIndex + 1;
} else {
  rightIndex = midIndex - 1;
}

The problem is, I am depending on the 1st element always. And the 1st element would be falsy
if the array is rotated but it would be truthy if the array wasn't rotated.

I need to depend on the last element, which will be always truthy 

[10, 20, 30, 40, 1, 2, 3]
[ F,  F,  F,  F, T, T, T]

[10, 20, 30, 40]
[ T,  T,  T,  T]

*/

function findMinRotated(array: number[]) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let boundaryIndex = -1;
  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    // if <= last element, then belongs to lower half
    if (array[midIndex] <= array[array.length - 1]) {
      boundaryIndex = midIndex;
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return boundaryIndex;
}

console.log(findMinRotated([10, 20, 30, 40, 1, 2, 3]));
console.log(findMinRotated([10, 20, 30, 40]));
console.log(findMinRotated([10]));
console.log(findMinRotated([]));
