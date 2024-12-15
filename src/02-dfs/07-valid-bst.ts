// BST: Binary Search Tree

import { TreeNode } from "../types";
import { isBalanced } from "./03-balanced-binary-tree";

const isValueBetweenExcluding = (
  root: TreeNode,
  min: number,
  max: number
): boolean => {
  if (root === undefined) {
    return true;
  }

  if (root.value < max && root.value > min) {
    return (
      isValueBetweenExcluding(root.left, min, root.value) &&
      isValueBetweenExcluding(root.right, root.value, max)
    );
  } else {
    return false;
  }
};

const isValidBst = (root: TreeNode): boolean => {
  if (root === undefined) {
    return true;
  }

  return (
    isValueBetweenExcluding(root.left, Number.MIN_VALUE, root.value) &&
    isValueBetweenExcluding(root.right, root.value, Number.MAX_VALUE) &&
    isBalanced(root)
  );

  // or
  //   return isValueBetweenExcluding(root, Number.MIN_VALUE, Number.MAX_VALUE) && isBalanced(root)
};
