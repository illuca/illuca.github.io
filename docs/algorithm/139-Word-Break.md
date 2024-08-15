---
title: 139. Word Break
date: 2023-12-31 23:47:30
tags: [leetcode, medium, DP, sub, string]
---

https://leetcode.com/problems/word-break/description/

方法一：

因为法二还是有点复杂，不如双指针更容易理解：

```python
class Solution:
    def wordBreak(self, s: str, W: List[str]) -> bool:
        def f(s, W):
            N = len(s)
            p = [False] * (N + 1)
            p[0] = True
            for j in range(0, N + 1):
                for i in range(0, j):
                    # s[0..-1]是空字符串，当然可以被W表示，表示为p(0)=True
                    # 我们要求的是s[0..N-1]表示为p(N)
                    # for 0<=i<j, 0<=j<=N
                    # if s[i..j-1] in W, p(j) depends on p(i)
                    if s[i:j] in W:
                        p[j] = p[j] or p[i]
            return p[N]
        return f(s, W)
```

Method 2:

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
