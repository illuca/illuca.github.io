---
title: 79. Word Search
date: 2024-01-12 17:28:45
tags: [leetcode, medium, backtrack]
---



https://leetcode.com/problems/word-search/

```python
class Solution:
    def exist(self, A: List[List[str]], W: str) -> bool:
        def f(x,y,idx):
            nonlocal Z
            if idx>=len(W):
                Z=True 
            elif idx<len(W) and 0<=x<len(A) and 0<=y<len(A[0]) and A[x][y]==W[idx] and (x,y) not in S:
                S.add((x,y))
                for a,b in [(x+1,y),(x-1,y),(x,y+1),(x,y-1)]:
                    if not Z:
                        f(a,b,idx+1)
                S.discard((x,y))
        Z=False
        for i in range(len(A)):
            for j in range(len(A[0])):
                S=set()
                f(i,j,0)
        return Z
```



We can set `A[x][y]` as # to mark it as visited to prevent the same cell from being visited more than one time.

```python
class Solution:
    def exist(self, A: List[List[str]], W: str) -> bool:
        def f(x,y,idx):
            nonlocal Z
            if idx>=len(W):
                Z=True 
            elif idx<len(W) and 0<=x<len(A) and 0<=y<len(A[0]) and A[x][y]==W[idx]:
                A[x][y]='#'
                for a,b in [(x+1,y),(x-1,y),(x,y+1),(x,y-1)]:
                    if not Z:
                        f(a,b,idx+1)
                A[x][y]=W[idx]
        Z=False
        for i in range(len(A)):
            for j in range(len(A[0])):
                f(i,j,0)
        return Z
```

