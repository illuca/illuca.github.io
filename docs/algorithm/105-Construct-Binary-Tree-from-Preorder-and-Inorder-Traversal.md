---
title: 105. Construct Binary Tree from Preorder and Inorder Traversal
date: 2023-12-21 21:55:47
tags: [leetcode, medium, tree, DFS, inorder]
---



https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/



Solution1: dfs

```python
class Solution:
    def buildTree(self, A: List[int], B: List[int]) -> Optional[TreeNode]:
        def f(l,r):
            nonlocal idx
            if l>r:
                return None
            
            root=TreeNode(A[idx])
            idx+=1
            root.left=f(l,BI[root.val]-1)
            root.right=f(BI[root.val]+1,r)
            return root

        if A is None or B is None:
            return None
        BI={}
        idx=0
        for i in range(len(A)):
            BI[B[i]]=i
        return f(0,len(A)-1)
```

This version is easier to understand:

```python
class Solution:
    def buildTree(self, A: List[int], B: List[int]) -> Optional[TreeNode]:
        def f(l1,r1, l2,r2):
            if l1>r1:
                return None
            
            root=TreeNode(A[l1])
            lsize=BI[root.val]-l2
            root.left=f(l1+1,l1+lsize,  l2,BI[root.val]-1)
            root.right=f(l1+lsize+1,r1, BI[root.val]+1,r2)
            return root

        BI={}
        for i in range(len(A)):
            BI[B[i]]=i
        return f(0,len(A)-1,0,len(B)-1)
```

