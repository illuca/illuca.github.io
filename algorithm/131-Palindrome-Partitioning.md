---
title: 131. Palindrome Partitioning
date: 2024-01-13 00:38:20
tags: [leetcode, medium, backtrack]
---



https://leetcode.com/problems/palindrome-partitioning/

```python
class Solution:
    def partition(self, A: str) -> List[List[str]]:
        def g(l,r):
            while l<=r:
                if A[l]!=A[r]:
                    return False
                elif A[l]==A[r]:
                    l+=1
                    r-=1
            return True

        def f(start,C):
            if start>=len(A):
                Z.append(C[:])
                return
            if start<len(A):
                for end in range(start,len(A)):
                    if g(start,end):
                        C.append(A[start:end+1])
                        f(end+1,C)
                        C.pop()
        if not A:
            return []
        Z=[]
        f(0,[])
        return Z
```

