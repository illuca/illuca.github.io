---
title: 560. Subarray Sum Equals K
date: 2023-12-17 22:17:09
tags: [leetcode, medium, prefix sum, array, sub, hash]
---



```python
class Solution:
    def subarraySum(self, A: List[int], k: int) -> int:
        N=len(A)
        D=defaultdict(int)
        S=0
        ans=0
        D[0]=1
        for i in range(N):
            S+=A[i]
            if S-k in D:
                ans+=D[S-k]
            D[S]+=1
        return ans
```

