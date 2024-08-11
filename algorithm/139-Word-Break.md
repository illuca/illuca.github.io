---
title: 139. Word Break
date: 2023-12-31 23:47:30
tags: [leetcode, medium, DP, sub, string]
---



https://leetcode.com/problems/word-break/description/

It is similar to money change.

Note: 

P[i] denotes whether substring up to i can be constructed by the word list.

It is obvious that empty string is always able to be contructed. Thus P[0]=True.

```python
class Solution:
    def wordBreak(self, s: str, W: List[str]) -> bool:
        N=len(s)
        P=[False]*(N+1)
        P[0]=True
        for i in range(1,N+1):
            for w in W:
                if i-len(w)>=0 and s[i-len(w):i]==w:
                    P[i]=P[i] or P[i-len(w)]
        return P[-1]
```

