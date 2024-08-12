---
title: 39. Combination Sum
date: 2023-12-27 18:25:04
tags: [leetcode, medium, backtrack, combination]
---



https://leetcode.com/problems/combination-sum/

This version does not consider if the given array has been sorted. But anyway, it passed all tests :P.

```python
class Solution:
    def combinationSum(self, A: List[int], target: int) -> List[List[int]]:
        def f(i,curr,W):
            if W>target:
                return
            if W==target:
                Z.append(curr[:])
                return
            if W<target:
                for i in range(len(A)):
                    if curr and A[i]<curr[-1]:
                        continue
                    curr.append(A[i])
                    W+=A[i]
                    
                    f(i+1,curr,W)
                    
                    curr.pop()
                    W-=A[i]
        Z=[]
        f(0,[],0)
        return Z
```

This version is more correct:

```python
class Solution:
    def combinationSum(self, A: List[int], target: int) -> List[List[int]]:
        def f(start,curr,W):
            if W>target:
                return
            if W==target:
                Z.append(curr[:])
                return
            if W<target:
                # give current index one more chance
                for i in range(start,len(A)):
                    curr.append(A[i])
                    W+=A[i]
                    
                    f(i,curr,W)
                    
                    curr.pop()
                    W-=A[i]
        Z=[]
        A.sort()
        f(0,[],0)
        return Z
```

