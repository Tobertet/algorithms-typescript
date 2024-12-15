/*

Given two arrays representing the preorder and inorder traversals of the same binary tree consisting of unique values, construct the original tree.

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7].

    3
  9   20
    15   7
  
[9], [9]
[20, 15, 7], [15, 20, 7]

*/

import { TreeNode } from "../types";

const constructBinaryTree = (
  preorder: number[],
  inorder: number[]
): TreeNode => {
  if (preorder.length === 0 && inorder.length === 0) {
    return undefined;
  }

  // Main problem with this solution is that findIndex increases the cost of the algorithm
  const nodeIndexInInorder = inorder.findIndex((item) => item === preorder[0]);

  return {
    value: preorder[0],
    left: constructBinaryTree(
      preorder.slice(1, nodeIndexInInorder + 1),
      inorder.slice(0, nodeIndexInInorder)
    ),
    right: constructBinaryTree(
      preorder.slice(nodeIndexInInorder + 1),
      inorder.slice(nodeIndexInInorder + 1)
    ),
  };
};

console.log(constructBinaryTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
