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



[2025-11-13 Thu 21:37]

Trick is: make use of set=O(n), set is better than sort.

and k consective, make use of k.

So it is obvious.

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        S=set(nums)
        R=1
        M=1
        for n in S:
            R=1
            if n-1 not in S:
                curr=n
                # if next consective is in S, then continue to check next one, otherwise break
                while curr+1 in S:
                    curr+=1
                    R+=1
                    M=max(R,M)
        return M
```

