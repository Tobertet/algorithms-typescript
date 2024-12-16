import { TreeNode } from "../types";

const insertIntoBst = (root: TreeNode, value: number): TreeNode => {
  if (root === undefined) {
    return { left: undefined, right: undefined, value };
  }
  if (value === root.value) {
    return root;
  }

  if (value > root.value) {
    root.right = insertIntoBst(root.right, value);
  } else {
    root.left = insertIntoBst(root.left, value);
  }

  return root;
};
