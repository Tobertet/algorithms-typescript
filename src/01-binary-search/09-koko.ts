// link: https://leetcode.com/problems/koko-eating-bananas/

/* Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
*/

const isFeasible = (piles: number[], h: number, k: number): boolean => {
  let hoursNeeded = piles
    .map((pile) => Math.ceil(pile / k))
    .reduce((a, b) => a + b, 0);

  return hoursNeeded <= h;
};

const koko = (piles: number[], h: number): number => {
  let left = 0;
  let right = Math.max(...piles);
  let answer = right;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (isFeasible(piles, h, mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
};

console.log(koko([3, 6, 7, 11], 8));
console.log(koko([30, 11, 23, 4, 20], 5));
console.log(koko([30, 11, 23, 4, 20], 6));
