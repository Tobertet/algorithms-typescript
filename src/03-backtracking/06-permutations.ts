// Permutation means O(n!)

const dfs = (
  letters: string[],
  startIndex: number,
  path: string[],
  result: string[],
  usedLetterIndices: Set<number>
) => {
  if (startIndex === letters.length) {
    result.push(path.join(""));
    return;
  }

  for (let i = 0; i < letters.length; i++) {
    if (usedLetterIndices.has(i)) {
      continue;
    }
    path.push(letters[i]);
    usedLetterIndices.add(i);
    dfs(letters, startIndex + 1, path, result, usedLetterIndices);
    path.pop();
    usedLetterIndices.delete(i);
  }
};

const permutations = (letters: string[]) => {
  const result: string[] = [];
  dfs(letters, 0, [], result, new Set());
  return result;
};

// O(n! * n)

console.log(permutations(["a", "a", "c"]));
