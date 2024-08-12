---
title: 64. Minimum Path Sum
date: 2024-01-16 01:50:55
tags: [leetcode, medium, dp]
---



https://leetcode.com/problems/minimum-path-sum/description/

```python
class Solution:
    def minPathSum(self, G: List[List[int]]) -> int:
        Z=[[0]*len(G[0]) for _ in range(len(G))]
        for i in range(len(G)):
            for j in range(len(G[0])):
                if i==0 and j==0:
                    Z[i][j]=G[i][j]
                elif i==0:
                    Z[i][j]=Z[i][j-1]+G[i][j]
                elif j==0:
                    Z[i][j]=Z[i-1][j]+G[i][j]
                else:
                    Z[i][j]=min(Z[i-1][j],Z[i][j-1])+G[i][j]
        return Z[-1][-1]
```

