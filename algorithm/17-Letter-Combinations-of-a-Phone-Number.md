---
title: 17. Letter Combinations of a Phone Number
date: 2023-12-27 17:01:47
tags: [leetcode, medium, backtrack, combination]
---



https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

```python
class Solution:
    def letterCombinations(self, A: str) -> List[str]:
        D={
            '2': "abc",
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        def f(idx,curr):
            if len(curr)==len(A):
                Z.append("".join(curr))    
                return
            candidates=D[A[idx]]
            for candidate in candidates:
                curr.append(candidate)
                f(idx+1,curr)
                curr.pop()
        Z=[]
        if not A:
            return []
        f(0,[])
        return Z
```

