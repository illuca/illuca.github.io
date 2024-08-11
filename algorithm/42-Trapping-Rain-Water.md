---
title: 42. Trapping Rain Water
date: 2023-12-16 23:08:01
tags: [leetcode, hard, DP]
---







```python
class Solution:
    def trap(self, A: List[int]) -> int:
        N=len(A)
        L=[0]*N
        M=0
        for i in range(N):
            M=max(M,A[i])
            L[i]=M
        R=[0]*N
        M=0
        for i in range(N-1,-1,-1):
            M=max(M,A[i])
            R[i]=M
        ret=0
        for i in range(1,len(A)):
            LM=L[i]
            RM=R[i]
            ret+=min(LM,RM)-A[i]
        return ret
```
