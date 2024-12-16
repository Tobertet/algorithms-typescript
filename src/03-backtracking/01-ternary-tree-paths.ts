import { NTreeNode, TreeNode } from "../types";

// Note: we send both the path (where we're at) and res (accumulate)
// so that children can mutate them

const dfs = (root: NTreeNode, path: number[], res: string[]) => {
  // exit condition: when a leaf node is reached, append the path to the results
  if (root === undefined) {
    return [];
  }
  if (root.children.length === 0) {
    path.push(root.value);
    const currentPath = path.join("->");
    // IMPORTANT: Clone the object being pushed if it is an array or object
    res.push(currentPath);
    path.pop();
    return;
  }
  // DFS on each non-null child
  for (const child of root.children) {
    if (child) {
      path.push(root.value);
      dfs(child, path, res);
      path.pop();
    }
  }
};

const ternaryTreePaths = (root: NTreeNode): string[] => {
  const res: string[] = [];
  if (root) {
    dfs(root, [], res);
  }
  return res;
};
