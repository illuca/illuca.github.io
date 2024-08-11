---
title: 739. Daily Temperatures
date: 2024-01-05 22:58:00
tags: [leetcode, medium, stack]
---



https://leetcode.com/problems/daily-temperatures/

```python
class Solution:
    def dailyTemperatures(self, A: List[int]) -> List[int]:
        if not A:
            return []
        if A:
            S=[(0,A[0])]
            Z=[0]*len(A)
            i=1
            while i<len(A):
                while S and A[i]>S[-1][1]:
                    Z[S[-1][0]]=i-S[-1][0]
                    S.pop()              
                S.append((i,A[i]))
                i+=1
            return Z
```

