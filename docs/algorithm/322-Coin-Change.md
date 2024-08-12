---
title: 322. Coin Change
date: 2023-12-30 20:32:45
tags: [leetcode, medium, DP]
---



https://leetcode.com/problems/coin-change/description/

```python
class Solution:
    def coinChange(self, A: List[int], T: int) -> int:
        dp=[T+1]*(T+1)
        dp[0]=0
        A.sort()
        for i in range(1,T+1):
            for a in A:
                if i-a>=0:
                    dp[i]=min(dp[i],dp[i-a]+1)
                else:
                    break
        if dp[-1]==T+1:
            return -1
        else:
            return dp[-1]
```
