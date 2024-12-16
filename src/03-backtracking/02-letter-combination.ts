const dfs = (
  length: number,
  startIndex: number, // where are we? Sometimes can be changed with path.length
  path: string[], // how did we get here?
  res: string[] // report back
) => {
  if (startIndex === length) {
    res.push(path.join(""));
    return;
  }
  for (const letter of ["a", "b"]) {
    path.push(letter);
    dfs(length, startIndex + 1, path, res);
    path.pop();
  }
};

const letterCombination = (length: number) => {
  const result: string[] = [];
  dfs(length, 0, [], result);
  return result;
};

console.log(letterCombination(2));
console.log(letterCombination(4));

// Time Complexity: The height of the tree is n (length param). Since there are a maximum
// of 2 children ("a", "b") per node, the cost is O(2^n).
// Also, joining the strings at each node adds O(n) so O(2^n * n)

// Space Complexity: We store 2^n strings in total of length n. Also, the height
// of the tree is n, so O(2^n * n)
