---
title: 47. Permutations II
date: 2023-12-14 22:12:33
tags: [leetcode, medium, backtrack]
---





```python
from collections import Counter

class Solution:
    def permuteUnique(self, A: List[int]) -> List[List[int]]:
        def backtrack(l):
            if len(l)==N:
                ret.append(l[:])
                return
            S=set()
            for a in A:
                if a not in S:
                    S.add(a)
                    if C[a]!=0:
                        C[a]-=1
                        l.append(a)
                        backtrack(l)
                        l.pop()
                        C[a]+=1
        if not A:
            return []
        N=len(A)
        C=Counter(A)
        print(C)
        ret=[]
        backtrack([])
        return ret
```



```py
from collections import Counter

class Solution:
    def permuteUnique(self, A: List[int]) -> List[List[int]]:
        def f(l,a):
            i=0
            res=[]
            while i<=len(l):
                new=l[:i]+[a]+l[i:]
                if new not in newll and new not in res:
                    print(new)
                    res.append(new)
                if i<len(l) and l[i]==a:
                    i+=2
                else:
                    i+=1
            return res

        ll=[[]]
        A.sort()
        N=len(A)
        for a in A:
            newll=[]
            for l in ll:
                newll.extend(f(l,a))
            # print(newll)
            ll=newll
        return ll
```

