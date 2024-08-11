---
title: 128. Longest Consecutive Sequence
date: 2023-12-15 18:02:52
tags: [leetcode, medium, greedy]
---



https://leetcode.com/problems/longest-consecutive-sequence/



```python
class Solution:
    def longestConsecutive(self, A: List[int]) -> int:
        if not A:
            return 0
        S=set(A)
        M=1
        for a in A:
            if a in S:
                S.discard(a)
                k=1
                i=1
                while a+i in S:
                    k+=1
                    S.discard(a+i)
                    i+=1
                i=1
                while a-i in S:
                    k+=1
                    S.discard(a-i)
                    i+=1
                M=max(M,k)
        return M
```



It can be simplified:

```python
class Solution:
    def longestConsecutive(self, A: List[int]) -> int:
        if not A:
            return 0
        S=set(A)
        M=1
        for a in S:
            if a-1 not in S:
                k=1
                i=1
                while a+i in S:
                    k+=1
                    i+=1
                M=max(M,k)
        return M
```

