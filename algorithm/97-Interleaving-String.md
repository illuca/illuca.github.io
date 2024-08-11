---
title: 97. Interleaving String
date: 2024-02-11 15:49:53
tags: [leetcode, medium, memorization, DP]
---



https://leetcode.com/problems/interleaving-string/?envType=study-plan-v2&envId=top-interview-150

Solution1:

```python
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        @cache
        def f(i,j,k):
            if i<len(s1) and j<len(s2):
                if s1[i]==s3[k] and s2[j]==s3[k]:
                    return f(i+1,j,k+1) or f(i,j+1,k+1)
                if s1[i]==s3[k]:
                    return f(i+1,j,k+1)
                if s2[j]==s3[k]:
                    return f(i,j+1,k+1)
            if i<len(s1):
                return s1[i]==s3[k] and f(i+1,j,k+1)
            if j<len(s2):
                return s2[j]==s3[k] and f(i,j+1,k+1)
            return True
        if len(s1)+len(s2)!=len(s3):
            return False
        return f(0,0,0)
```

Solution2:

```python
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1) + len(s2) != len(s3):
            return False

        dp = [[False] * (len(s2) + 1) for _ in range(len(s1) + 1)]
        dp[0][0] = True
        for i in range(len(s1)+1):
            for j in range(len(s2)+1):
                if i>=1:
                    dp[i][j]|=dp[i-1][j] and s1[i-1]==s3[i+j-1]
                if j>=1:
                    dp[i][j]|=dp[i][j-1] and s2[j-1]==s3[i+j-1]
        return dp[len(s1)][len(s2)]
```

