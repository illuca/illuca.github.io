---
title: 73. Set Matrix Zeroes
date: 2023-12-19 18:24:05
tags: [leetcode, medium, array, space complexity, matrix]
---



```python
class Solution:
    def setZeroes(self, A: List[List[int]]) -> None:
        M=len(A)
        N=len(A[0])
        r0=False
        c0=False
        for i in range(M):
            for j in range(N):
                if A[i][j]==0:
                    A[i][0]=0        
                    A[0][j]=0
                    if i==0:
                        r0=True
                    if j==0:
                        c0=True
        for i in range(1,M):
            if A[i][0]==0:
                for j in range(N):
                    A[i][j]=0
        for j in range(1,N):
            if A[0][j]==0:
                for i in range(M):
                    A[i][j]=0
        if r0:
            for j in range(N):
                A[0][j]=0
        if c0:
            for i in range(M):
                A[i][0]=0
```

