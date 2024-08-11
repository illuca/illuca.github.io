---
title: 31. Next Permutation
date: 2023-12-14 18:57:18
tags: [leetcode, medium]
---



https://leetcode.com/problems/next-permutation/description/



```python
class Solution:
    def nextPermutation(self, A: List[int]) -> None:
        def reverse(start):
            i=start
            j=N-1
            while i<j:
                A[i],A[j]=A[j],A[i]
                i+=1
                j-=1
        N=len(A)
        i=N-2
        while i>=0 and A[i]>=A[i+1]:
            i-=1
        if i>=0:
            j=N-1
            while j>=0 and A[j]<=A[i]:
                j-=1
            # k∈[j,N-1],A[k]<=A[i]
            # thus A[j]<=A[i], thus after swap, it is still sorted
            A[i],A[j]=A[j],A[i]
            reverse(i+1)
        else:
            reverse(i+1)
```

