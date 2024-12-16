const KEYBOARD: Record<number, string> = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const dfs = (
  digits: string,
  startIndex: number,
  path: string[],
  res: string[]
) => {
  if (startIndex === digits.length) {
    res.push(path.join(""));
    return;
  }
  const digit: number = Number.parseInt(digits.charAt(startIndex), 10);
  for (const letter of KEYBOARD[digit]) {
    path.push(letter);
    dfs(digits, startIndex + 1, path, res);
    path.pop();
  }
};

const letterCombinationPhone = (digits: string): string[] => {
  const result: string[] = [];
  dfs(digits, 0, [], result);
  return result;
};

console.log(letterCombinationPhone("69"));
