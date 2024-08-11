---
title: 78. Subsets
date: 2023-12-26 20:43:51
tags: [leetcode, medium, backtrack, sub, DP]
---



https://leetcode.com/problems/subsets/description/

Solution1: bottom up dp

```python
class Solution:
    def subsets(self, A: List[int]) -> List[List[int]]:
        def f(idx):
            for i in range(len(Z)):
                Z.append(Z[i]+[A[idx]])
            Z.append([A[idx]])
        Z=[]
        S=[]
        A.sort()
        for i in range(len(A)):
            S.append(i)
            f(i)
        Z.append([])
        return Z
```

Solution2: backtrack

```python
class Solution:
    def subsets(self, A: List[int]) -> List[List[int]]:
        def f(start,curr):
            if len(curr)==k:
                Z.append(curr[:])
                return
            for i in range(start,len(A)):
                curr.append(A[i])
                f(i+1,curr)
                curr.pop()
        Z=[]
        for k in range(len(A)+1):
            # length is from 0 to len(A)
            f(0,[])
        return Z
```

