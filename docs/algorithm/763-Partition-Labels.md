---
title: 763. Partition Labels
date: 2024-01-08 16:15:35
tags: [leetcode, medium, greedy]
---

https://leetcode.com/problems/partition-labels/

You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be `s`.

Return *a list of integers representing the size of these parts*.



Solution1: Greedy

Once we see "as many parts as possible", it tends to be a problem of greedy or dp.

```python
class Solution:
    def partitionLabels(self, A: str) -> List[int]:
        D=defaultdict(int)
        for i in range(len(A)):
            D[A[i]]=i
        M=0
        Z=[]
        prev=0
        for i in range(len(A)):
            M=max(M,D[A[i]])
            if i==M:
                Z.append(i-prev+1)
                prev=i+1
        return Z
```

