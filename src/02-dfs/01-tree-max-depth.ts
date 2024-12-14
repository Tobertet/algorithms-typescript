import { TreeNode } from "../types";

// Space complexity is O(h) where h is the height of the tree. Worst case scenario
// is when the tree is thin and all the nodes have exactly one child. Then O(n)

const dfs = (root: TreeNode, currentLevel: number): number => {
  if (root === undefined) {
    return currentLevel - 1;
  }
  return Math.max(
    dfs(root.left, currentLevel + 1),
    dfs(root.right, currentLevel + 1)
  );
};

const treeMaxDepth = (root: TreeNode): number => {
  if (root === undefined) {
    return 0;
  }
  return dfs(root, 0);
};
