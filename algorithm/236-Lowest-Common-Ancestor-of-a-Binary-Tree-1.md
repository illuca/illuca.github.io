---
title: 236. Lowest Common Ancestor of a Binary Tree
date: 2023-12-23 22:24:30
tags: [leetcode, medium, tree, DFS]
---



https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

```python
class Solution:
    def lowestCommonAncestor(self, R: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def f(C):
            nonlocal ans
            if C is None:
                return False
            if C:
                l=f(C.left)
                r=f(C.right)
                found=C==p or C==q
                if l+r+found>=2:
                    ans=C
                return found or l or r
            
        ans=None
        f(R)
        return ans
```



Solution2: Disjoint set

```python
class Solution:
    def lowestCommonAncestor(self, R: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if R is None:
            return None
        A=[R]
        parent={R:None}
        while True:
            if p in parent and q in parent:
                break
            C=A.pop()
            if C.left:
                A.append(C.left)
                parent[C.left]=C
            if C.right:
                A.append(C.right)
                parent[C.right]=C
        seen=set()
        while p:
            seen.add(p)
            p=parent[p] # (1)
        # find parent until parent has been seen in step (1)
        while q not in seen:
            q=parent[q]
        return q
```

