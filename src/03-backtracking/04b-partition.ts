/*

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

*/

const isValid = (s: string): boolean => {
  let [left, right] = [0, s.length - 1];
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const partition = (s: string) => {
  const result: string[][] = [];
  const n = s.length;
  const dfs = (start: number, part: string[]) => {
    if (start === n) {
      result.push([...part]);
      return;
    }
    for (let end = start + 1; end < n + 1; end++) {
      const prefix = s.substring(start, end);
      if (isValid(prefix)) {
        part.push(prefix);
        dfs(end, part);
        part.pop();
      }
    }
  };
  dfs(0, []);
  return result;
};

console.log(partition("aaba"));
