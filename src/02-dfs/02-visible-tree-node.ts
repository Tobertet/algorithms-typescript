import { TreeNode } from "../types";

/* 

In a binary tree, a node is labeled as "visible" if, on the path from the root to that node, there isn't any node with a value higher than this node's value.

*/

const dfs = (root: TreeNode, maxSoFar: number): number => {
  if (root === undefined) {
    return 0;
  }

  return (
    (root.value < maxSoFar ? 0 : 1) +
    dfs(root.left, Math.max(maxSoFar, root.value)) +
    dfs(root.right, Math.max(maxSoFar, root.value))
  );
};

const visibleTreeNodes = (root: TreeNode): number => {
  if (root === undefined) {
    return 0;
  }
  return dfs(root, root.value);
};
