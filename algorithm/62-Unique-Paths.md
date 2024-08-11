---
title: 62. Unique Paths
date: 2024-01-16 00:08:47
tags: [leetcode, medium, dp]
---



https://leetcode.com/problems/unique-paths/description/

Solution1: top down dp

```python
class Solution:
    @cache
    def uniquePaths(self, m: int, n: int) -> int:
        if m==1 or n==1:
            return 1
        elif m>1 and n>1:
            return self.uniquePaths(m-1,n)+self.uniquePaths(m,n-1)
```



Solution2: bottom up dp

```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        """
        assume we have solved P(i-1,j) and P(i,j-1)
        then P(i,j)=P(i-1,j)+P(i,j-1)
        """
        P=[[0]*n for _ in range(m)]
        for i in range(n):
            P[0][i]=1
        for j in range(m):
            P[j][0]=1
        for i in range(1,m):
            for j in range(1,n):
                P[i][j]=P[i-1][j]+P[i][j-1]
        return P[m-1][n-1]
```

