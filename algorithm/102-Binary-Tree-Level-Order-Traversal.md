---
title: 102. Binary Tree Level Order Traversal
date: 2023-12-19 22:25:00
tags: [leetcode, tree, BFS]
---



S1: Recursion:

```python
class Solution:
    def levelOrder(self, R: Optional[TreeNode]) -> List[List[int]]:
        def f(r,k):
            if len(ans)==k:
                ans.append([]) #newline
            ans[k].append(r.val)
            if r.left:
                f(r.left,k+1)
            if r.right:
                f(r.right,k+1)
        if not R:
            return []
        ans=[]
        f(R,0)
        return ans
```



S1: Iteration

```python
from collections import deque
class Solution:
    def levelOrder(self, R: Optional[TreeNode]) -> List[List[int]]:
        if not R:
            return []
        Q=deque([(R,0)])
        ans=[]
        while len(Q)>0:
            C,k=Q.popleft()
            if len(ans)==k:
                ans.append([])
            ans[k].append(C.val)
            if C.left:
                Q.append((C.left,k+1))
            if C.right:
                Q.append((C.right,k+1))
        return ans
```



```python
class Solution:
    def levelOrder(self, R: Optional[TreeNode]) -> List[List[int]]:
        if not R:
            return []
        Q=deque([R])
        ans=[]
        k=0
        while len(Q)>0:
            ans.append([])
            for i in range(len(Q)):
                C=Q.popleft()
                ans[k].append(C.val)
                if C.left:
                    Q.append(C.left)
                if C.right:
                    Q.append(C.right)
            k+=1
        return ans
```

