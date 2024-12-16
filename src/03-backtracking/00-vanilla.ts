const isLeaf = (startIndex: number): boolean => {
  throw "Not implemented";
};

const report = (startIndex: number[]): void => {
  throw "Not implemented";
};

const getEdges = (startIndex: number, additionalStates?: any[]): number[] => {
  throw "Not implemented";
};

const isNotValid = (startIndex: number): number[] => {
  throw "Not implemented";
};

// Backtracking is dfs in the end

const dfs = (startIndex: number, path: number[]) => {
  if (isLeaf(startIndex)) {
    report(path);
    return;
  }
  for (const edge of getEdges(startIndex)) {
    path.push(edge);
    dfs(startIndex + 1, path);
    path.pop();
  }
};

// With pruning

const dfs2 = (startIndex: number, path: number[]) => {
  if (isLeaf(startIndex)) {
    report(path);
    return;
  }
  for (const edge of getEdges(startIndex)) {
    // change1
    if (isNotValid(edge)) {
      continue;
    }
    path.push(edge);
    // change2
    dfs(startIndex + edge.length, path);
    path.pop();
  }
};

// With additional states (sometimes we need previous states for knowing if a leaf is valid)
// change1
const dfs3 = (
  startIndex: number,
  path: number[],
  res: any[],
  additionalStates: any[]
) => {
  if (isLeaf(startIndex)) {
    res.push(structuredClone(path));
    return;
  }
  // change2
  for (const edge of getEdges(startIndex, additionalStates)) {
    if (isNotValid(edge)) {
      continue;
    }
    path.push(edge);
    // change3
    if (additionalStates) {
      update(additionalStates);
    }
    dfs(startIndex + edge.length, path);
    path.pop();
    revert(additionalStates); // if necessary, e.g. permutations
  }
};

/*

startIndex is used to keep track of the current level of the state-space tree we are in
edge is the choice we make

The main logic to fill out is
isLeaf (is a solution)
getEdges (get more child possibilities)

*/
