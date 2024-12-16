/*

Given a binary tree, write a serialize function that converts the tree into a 
string and a deserialize function that converts a string back to a binary tree. 
You may serialize the tree into any string representation you want, as long as 
it can be deserialized properly.

*/

import { TreeNode } from "../types";

const serialize = (root: TreeNode): string => {
  if (root === undefined) {
    return "x";
  }
  const left = serialize(root.left);
  const right = serialize(root.right);
  return `${root.value}${left}${right}`;
};

function deserializeDFS(nodes: Array<string>): TreeNode {
  const val = nodes.shift();
  if (val === "x" || val === undefined) return undefined;

  return {
    value: parseInt(val, 10),
    left: deserializeDFS(nodes),
    right: deserializeDFS(nodes),
  };
}

const deserialize = (s: string): TreeNode => {
  return deserializeDFS(s.split(""));
};

console.log(
  serialize({
    left: { left: undefined, right: undefined, value: 2 },
    right: undefined,
    value: 4,
  })
);

console.log(
  deserialize(
    serialize({
      left: { left: undefined, right: undefined, value: 2 },
      right: undefined,
      value: 4,
    })
  )
);
