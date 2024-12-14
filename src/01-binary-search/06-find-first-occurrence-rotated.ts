const findFirstOccurrenceRotated = (array: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let firstOccurrenceIndex = -1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (array[midIndex] === target) {
      firstOccurrenceIndex = midIndex;
      rightIndex = midIndex - 1;
    } else {
      //
      if (array[leftIndex] < array[midIndex]) {
        if (array[leftIndex] <= target && target < array[midIndex]) {
          rightIndex = midIndex - 1;
        } else {
          leftIndex = midIndex + 1;
        }
      }
      if (array[rightIndex] > array[midIndex]) {
        // right hand is sorted
        if (array[rightIndex] >= target && target > array[midIndex]) {
          leftIndex = midIndex + 1;
        } else {
          rightIndex = midIndex - 1;
        }
      }
    }
  }

  return firstOccurrenceIndex;
};

/* 
NOTE: For this case, what we do is:
    - Is the element I am looking at Truthy?
        - I know that either this is the element or it is to the left
    - If not
        - Could there be Truthy elements to the left?
        - Could there be Truthy elements to the right?
*/

console.log(findFirstOccurrenceRotated([10, 20, 30, 40, 50], 40));
console.log(findFirstOccurrenceRotated([40, 50, 10, 20, 30], 40));
console.log(findFirstOccurrenceRotated([44, 50, 10, 20, 30], 40));

// [10, 20, 30, 40, 50] 40
// [ F,  F,  F, XT,  T]
// [40, 50, 10, 20, 30]
// [XT,  T,  T,  T,  T]
// [44, 50, 10, 20, 30]
// [ T,  T,  F,  F,  F]
