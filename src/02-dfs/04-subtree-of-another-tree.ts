import { TreeNode } from "../types";

const isSameTree = (root: TreeNode, subRoot: TreeNode): boolean => {
  if (root === undefined && subRoot === undefined) {
    return true;
  }
  if (root === undefined || subRoot === undefined) {
    return false;
  }
  return (
    root.value === subRoot.value &&
    isSameTree(root.left, subRoot.left) &&
    isSameTree(root.right, subRoot.right)
  );
};

const subtreeOfAnotherTree = (root: TreeNode, subRoot: TreeNode): boolean => {
  if (root === undefined) {
    return false;
  }
  return (
    isSameTree(root, subRoot) ||
    subtreeOfAnotherTree(root.left, subRoot) ||
    subtreeOfAnotherTree(root.right, subRoot)
  );
};
