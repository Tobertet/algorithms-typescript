/*

Given an integer n, generate all strings with n matching parentheses. "matching" 
parentheses mean 
- there is equal number of opening and closing parentheses.
- each opening parenthesis has matching closing parentheses.

For example, () is a valid string but )( is not a valid string because ) has 
no matching parenthesis before it and ( has no matching parenthesis after it.

*/

const dfs = (
  n: number,
  startIndex: number,
  path: string[],
  result: string[],
  openCount: number,
  closedCount: number
) => {
  if (n * 2 === startIndex) {
    result.push(path.join(""));
    return;
  }
  if (openCount < n) {
    path.push("(");
    dfs(n, startIndex + 1, path, result, openCount + 1, closedCount);
    path.pop();
  }
  if (closedCount < openCount) {
    path.push(")");
    dfs(n, startIndex + 1, path, result, openCount, closedCount + 1);
    path.pop();
  }
};

const generateParentheses = (n: number): string[] => {
  const result: string[] = [];
  dfs(n, 0, [], result, 0, 0);
  return result;
};

console.log(generateParentheses(3));

// O(4^n * n) both for time complexity and space complexity. Strings of 4 characters
