export type TreeNode<T = number> =
  | {
      left: TreeNode<T>;
      right: TreeNode<T>;
      value: T;
    }
  | undefined;
