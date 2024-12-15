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

function buildTreeRecursive(
  preorder: number[],
  indexMap: Map<number, number>,
  preStart: number,
  inStart: number,
  size: number
): TreeNode {
  if (size <= 0) return undefined;

  const rootValue = preorder[preStart];
  const inorderIndex = indexMap.get(rootValue)!;
  const leftSize = inorderIndex - inStart;

  const left = buildTreeRecursive(
    preorder,
    indexMap,
    preStart + 1,
    inStart,
    leftSize
  );
  const right = buildTreeRecursive(
    preorder,
    indexMap,
    preStart + 1 + leftSize,
    inorderIndex + 1,
    size - 1 - leftSize
  );

  return { left, right, value: rootValue };
}

function constructBinaryTree(preorder: number[], inorder: number[]): TreeNode {
  const indexMap = new Map<number, number>();
  inorder.forEach((value, index) => {
    indexMap.set(value, index);
  });
  return buildTreeRecursive(preorder, indexMap, 0, 0, preorder.length);
}

console.log(constructBinaryTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
