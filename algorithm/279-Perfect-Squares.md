---
title: 279. Perfect Squares
date: 2023-12-30 20:08:03
tags: [leetcode, medium, DP]
---



https://leetcode.com/problems/perfect-squares/

```python
class Solution:
    def numSquares(self, n: int) -> int:
        # find the biggest sqaure num that is smaller than n
        x=floor(sqrt(n))
        Z=0
        A=[i**2 for i in range(x+1)]
        dp=[n+1]*(n+1)
        dp[0]=0
        for i in range(1,n+1):
            for a in A:
                if a>i:
                    break
                dp[i]=min(dp[i],dp[i-a]+1)
        return dp[-1]
```

