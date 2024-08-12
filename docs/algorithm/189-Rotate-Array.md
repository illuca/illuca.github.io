---
title: 189. Rotate Array
date: 2023-12-19 14:43:45
tags: [leetcode, medium, sub, array]
---

https://leetcode.com/problems/rotate-array/

```python
class Solution:
    def rotate(self, A: List[int], k: int) -> None:
        #reverse the whole
        
        N=len(A)
        k=k%N
        for i in range(N//2):
            A[i],A[N-1-i]=A[N-1-i],A[i]
        #reverse [0:k]
        for i in range(k//2):
            A[i],A[k-1-i]=A[k-1-i],A[i]
        #reverse [k:]
        for i in range((N-k)//2):
            A[k+i],A[N-1-i]=A[N-1-i],A[k+i]
```



It can be simplified:

```python
class Solution:
    def rotate(self, A: List[int], k: int) -> None:
        def reverse(i,j):
            while i<j:
                A[i],A[j]=A[j],A[i]
                i,j=i+1,j-1
        
        N=len(A)
        k=k%N
        #reverse the whole
        reverse(0,N-1)
        #reverse first k
        reverse(0,k-1)
        #reverse last k
        reverse(k,N-1)
```

