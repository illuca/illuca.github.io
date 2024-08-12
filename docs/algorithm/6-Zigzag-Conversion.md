---
title: 6. Zigzag Conversion
date: 2024-04-30 22:19:15
tags: [leetcode, string]
---



https://leetcode.com/problems/zigzag-conversion/description/

```python
class Solution:
    def convert(self, s: str, nrows: int) -> str:
        if nrows==1:
            return s
        D=defaultdict(list)
        # traverse row and once reach the ceil or bottom, then
        # change direction and increase/stop increase column
        k=0
        i=0
        j=0
        direction=True
        increase=False
        while k<len(s):
            D[i].append(s[k])
            k+=1
            if direction:
                i+=1
            else:
                i-=1
            if increase:
                j+=1
            if k%(nrows-1)==0:
                direction=not direction
                increase=not increase
        R=""
        for row in range(nrows):
            R+="".join(D[row])
        return R
```

Actually, we don't need `increase` variable. But it is simulation, so i keep it there.
