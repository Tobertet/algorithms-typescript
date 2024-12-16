export type TreeNode<T = number> =
  | {
      left: TreeNode<T>;
      right: TreeNode<T>;
      value: T;
    }
  | undefined;

export type NTreeNode<T = number> =
  | { value: T; children: NTreeNode<T>[] }
  | undefined;
