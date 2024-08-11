---
title: 300. Longest Increasing Subsequence
date: 2024-01-01 23:44:46
tags: [leetcode, medium, DP]
---



https://leetcode.com/problems/longest-increasing-subsequence/

`P[i]` denotes the maximum length of increasing subsequence that ends with `A[i]`.

```python
class Solution:
    def lengthOfLIS(self, A: List[int]) -> int:
        if not A:
            return 0
        N=len(A)
        P=[1]*N
        for i in range(N):
            for j in range(i):
                if A[j]<A[i]:
                    P[i]=max(P[i],P[j]+1)
        return max(P)
```

