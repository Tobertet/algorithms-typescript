export const squareRoot = (n: number) => {
  if (n === 0) {
    return 0;
  }

  let leftIndex = 1;
  let rightIndex = n;
  let result = -1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (midIndex * midIndex === n) {
      return midIndex;
    }
    if (midIndex * midIndex < n) {
      result = midIndex;
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return result;
};

console.log(squareRoot(9));
console.log(squareRoot(10));
console.log(squareRoot(20));
console.log(squareRoot(100));
