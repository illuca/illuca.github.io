---
title: 438. Find All Anagrams in a String
date: 2023-12-16 23:08:46
tags: [leetcode, medium, hash, string, pattern match]
---





```python
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        cp=Counter(p)
        cs=defaultdict(int)
        ret=[]
        for i in range(len(s)):
            cs[s[i]]+=1
            
            if i>=len(p):
                cs[s[i-len(p)]]-=1
                if cs[s[i-len(p)]]==0:
                    del cs[s[i-len(p)]]
            if cs==cp:
                ret.append(i-len(p)+1)
        return ret
```
