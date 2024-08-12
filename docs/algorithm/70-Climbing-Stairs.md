---
title: 70. Climbing Stairs
date: 2023-12-28 16:18:23
tags: [leetcode, easy, DP]
---



https://leetcode.com/problems/climbing-stairs/

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        # i am climbing staircase
        # it has n steps
        # i can take 1 or 2 step each time
        # P(i) denotes the number of ways to reach i
        # P(i)=P(i-1)+P(i-2)
        P=[0]*(n+1)
        P[0]=1
        P[1]=1
        for i in range(2,n+1):
            P[i]=P[i-1]+P[i-2]
        return P[n]
```

