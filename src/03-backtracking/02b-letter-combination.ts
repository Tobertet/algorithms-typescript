const dfs = (length: number, path: string, res: string[]) => {
  if (length === 0) {
    res.push(path);
    return;
  }
  dfs(length - 1, path + "a", res);
  dfs(length - 1, path + "b", res);
};

const letterCombination = (length: number) => {
  const result: string[] = [];
  dfs(length, "", result);
  return result;
};

console.log(letterCombination(2));
console.log(letterCombination(4));
