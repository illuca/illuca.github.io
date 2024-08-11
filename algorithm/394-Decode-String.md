---
title: 394. Decode String
date: 2024-01-05 18:16:17
tags: [leetcode, medium, stack]
---



https://leetcode.com/problems/decode-string/

```python
from collections import deque
class Solution:
    def decodeString(self, A: str) -> str:
        def f():
            p=i
            base=1
            res=0
            while Z and Z[-1].isdigit():
                res+=base*int(Z.pop())
                base*=10
            return res

        Z=[]
        i=0
        while i<len(A):
            a=A[i]
            if a==']':
                tmp=deque()
                while Z:
                    x=Z.pop()
                    if x=='[':
                        k=f()
                        tmp=k*tmp
                        break
                    tmp.appendleft(x)
                Z.extend(tmp)
                i+=1
                continue
            if a!=']':
                Z.append(a)
                i+=1
        return "".join(Z)

```

