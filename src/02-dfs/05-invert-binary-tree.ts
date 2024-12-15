import { TreeNode } from "../types";

const invertBinaryTree = (root: TreeNode): TreeNode => {
  if (root === undefined) {
    return undefined;
  }
  return {
    left: invertBinaryTree(root.right),
    right: invertBinaryTree(root.left),
    value: root.value,
  };
};
