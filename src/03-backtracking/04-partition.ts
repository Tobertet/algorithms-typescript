/*

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

*/

const getChildren = (s: string): string[] => {
  return Array.from({ length: s.length }, (_, index) => index + 1).map(
    (index) => s.slice(0, index)
  );
};

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

const dfs = (
  s: string,
  startIndex: number,
  path: string[],
  result: string[][]
) => {
  if (s.length === startIndex) {
    // Be wary of result. If I need to push an array or object, clone it first!
    result.push(structuredClone(path));
    return;
  }
  for (const child of getChildren(s.slice(startIndex))) {
    if (!isValid(child)) {
      continue;
    }
    path.push(child);
    dfs(s, startIndex + child.length, path, result);
    path.pop();
  }
};

const partition = (s: string) => {
  const result: string[][] = [];
  dfs(s, 0, [], result);
  return result;
};

console.log(partition("aaba"));
