import { TreeNode } from "../types";

const lowestCommonAncestorBst = (
  bst: TreeNode,
  p: number,
  q: number
): TreeNode => {
  if (bst === undefined) {
    return undefined;
  }

  if (p < bst.value && q < bst.value) {
    return lowestCommonAncestorBst(bst.left, p, q);
  } else if (p > bst.value && q > bst.value) {
    return lowestCommonAncestorBst(bst.right, p, q);
  } else {
    return bst;
  }
};
