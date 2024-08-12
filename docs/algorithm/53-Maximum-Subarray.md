---
title: 53. Maximum Subarray
date: 2023-12-18 22:32:15
tags: [leetcode, medium, sub, array, DP, divide and conquer]
---



https://leetcode.com/problems/maximum-subarray/editorial/

```python
class Solution:
    def maxSubArray(self, A: List[int]) -> int:
        if not A:
            return 0
        N=len(A)
        S=0
        M=float('-inf')
        for i in range(N):
            S+=A[i]
            M=max(M,S)
            if S<0:
                S=0
        return M
```



divide and conquer

```python
class Solution:
    def maxSubArray(self, A: List[int]) -> int:
        def f(l,r):
            if l>r:
                return -math.inf
            mid=(l+r)//2
            lmax=0
            curr=0
            for i in range(mid-1,l-1,-1):
                curr+=A[i]
                lmax=max(curr,lmax)
            rmax=0
            curr=0
            for i in range(mid+1,r+1):
                curr+=A[i]
                rmax=max(curr,rmax)
            curr=lmax+rmax+A[mid]
            left=f(l,mid-1)
            right=f(mid+1,r)
            
            return max(curr,left,right)
        return f(0,len(A)-1)
```

