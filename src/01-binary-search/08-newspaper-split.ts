// NOTE: The key to this algorithm is to find what variable needs to be distributed and then distribute it
// Since we are being asked about time, we can have a set with all the possible times and find which one is best.

const isFeasible = (
  newspaperReadTimes: number[],
  numCoworkers: number,
  timeLimit: number
) => {
  let necessaryTime = 0;
  let necessaryWorkers = 0;
  for (const readTime of newspaperReadTimes) {
    if (necessaryTime + readTime > timeLimit) {
      necessaryTime = 0;
      necessaryWorkers++;
    }
    necessaryTime += readTime;
  }
  if (necessaryTime !== 0) {
    necessaryWorkers++;
  }
  return necessaryWorkers <= numCoworkers;
};

export const newspaperSplit = (
  newspaperReadTimes: number[],
  numCoworkers: number
): number => {
  let left = Math.max(...newspaperReadTimes); // minimum time
  let right = newspaperReadTimes.reduce((a, b) => a + b, 0); // maximum time
  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (isFeasible(newspaperReadTimes, numCoworkers, mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

console.log(newspaperSplit([7, 2, 5, 10, 8], 2));
console.log(newspaperSplit([2, 3, 5, 7], 3));

// [7,2,5,10,8], 2

// [2,3,5,7], 3
