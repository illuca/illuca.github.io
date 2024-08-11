---
title: 118. Pascal's Triangle
date: 2023-12-28 16:45:19
tags: [leetcode, easy, DP]
---

https://leetcode.cn/problems/pascals-triangle/?envType=study-plan-v2&envId=top-100-liked

```python
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        P=[]
        P.append([1])
        for i in range(1,numRows):
            l=len(P[i-1])+1
            P.append([1]*l)
            for j in range(1,l-1):
                P[i][j]=P[i-1][j-1]+P[i-1][j]
        return P
```
