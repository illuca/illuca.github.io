---
title: 114. Flatten Binary Tree to Linked List
date: 2023-12-21 17:07:48
tags: [leetcode, medium, tree, DFS]
---

Solution1: DFS + store all nodes  with space complexity O(n):

```python
class Solution:
    def flatten(self, R: Optional[TreeNode]) -> None:
        def f(C):
            if C is None:
                return
            ans.append(C)
            f(C.left)
            f(C.right)
        ans=[]
        f(R)
        
        for i in range(1,len(ans)):
            ans[i-1].right=ans[i]
            ans[i-1].left=None
```

Solution2: DFS with space complexity O(1):

```python
class Solution:
    def flatten(self, R: Optional[TreeNode]) -> None:
        def f(C):
            if C is None:
                return None,None
            if C.left is None and C.right is None:
                return C,C
            if C.left is None:
                return C,f(C.right)[1]
            if C.right is None:
                C.right=C.left
                C.left=None
                return C,f(C.right)[1]
            if C.left and C.right:
                left,last=f(C.left)
                last.right=C.right
                C.right=left
                C.left=None
                return C,f(last.right)[1]
        f(R)
```

It is similar to Haskell pattern match.

