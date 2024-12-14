function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  // <= because left and right could point to the same element, < would miss it
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // use `(right - left) / 2` to prevent `left + right` potential overflow
    if (arr[mid] === target) return mid; // found target, return its index
    if (arr[mid] < target) {
      // middle less than target, discard left half by making left search boundary `mid + 1`
      left = mid + 1;
    } else {
      // middle greater than target, discard right half by making right search boundary `mid - 1`
      right = mid - 1;
    }
  }
  // if we get here we didn't hit above return so we didn't find target
  return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5], 1));
