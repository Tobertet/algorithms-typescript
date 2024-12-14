import { TreeNode } from "../types";

const treeHeight = (root: TreeNode): number => {
  if (root === undefined) {
    return 0;
  }
  const leftHeight = treeHeight(root.left);
  const rightHeight = treeHeight(root.right);
  if (
    leftHeight === -1 ||
    rightHeight === -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  ) {
    return -1;
  }
  return Math.max(leftHeight, rightHeight) + 1;
};

const isBalanced = (root: TreeNode): boolean => {
  if (root === undefined) {
    return true;
  }
  return treeHeight(root) !== -1;
};
