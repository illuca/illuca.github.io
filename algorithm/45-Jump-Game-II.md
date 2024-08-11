---
title: 45. Jump Game II
date: 2024-01-15 23:29:58
tags: [leetcode, medium, greedy]
---

https://leetcode.com/problems/jump-game-ii/

We always make our furthest step and when i is bigger than `far`, we need to make one more step.

```python
class Solution:
    def jump(self, A: List[int]) -> int:
        if not A:
            return 0
        if A:
            Z=0
            end=0
            far=0
            for i in range(len(A)-1):
                far=max(far,i+A[i])
                if i==end:
                    Z+=1
                    end=far
            return Z
```

