import { TreeNode } from "../types";

// Time Complexity: O(4^n * n). 4 when the numbers are 7 or 9, ^n as it is the height of the
// tree and * n because we are concatenating the string in each leaf

// Space complexity: O(4^n * [2]n). Because we produce O(4^n) strings, and each string is of length n
// Also, the height of the tree is n

const lowestCommonAncestor = (
  root: TreeNode,
  node1: number,
  node2: number
): TreeNode => {
  if (root === undefined) {
    return undefined;
  }

  if (root.value === node1 || root.value === node2) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, node1, node2);
  const right = lowestCommonAncestor(root.right, node1, node2);

  if (left === undefined && right === undefined) {
    return undefined;
  } else if (left === undefined) {
    return right;
  } else if (right === undefined) {
    return left;
  } else {
    return root;
  }
};
