---
title: 230. Kth Smallest Element in a BST
date: 2023-12-20 23:07:14
tags: [leetcode, medium, tree, inorder]
---

https://leetcode.com/problems/kth-smallest-element-in-a-bst/



```python
class Solution:
    def __init__(self):
        self.k=0
    def kthSmallest(self, R: Optional[TreeNode], k: int) -> int:
        def f(C):
            if not C:
                return -1
            l=f(C.left)
            if l!=-1:
                return l
            # left not found
            self.k+=1
            if self.k==k:
                return C.val
            return f(C.right)
        return f(R)
```

It can be improved to deal with node with negative values:

```python
class Solution:
    def __init__(self):
        self.k=0
    def kthSmallest(self, R: Optional[TreeNode], k: int) -> int:
        def f(C):
            if not C:
                return C
            l=f(C.left)
            if l:
                return l
            # left not found
            self.k+=1
            if self.k==k:
                return C
            return f(C.right)
        return f(R).val
```

