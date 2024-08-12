---
title: 797. All Paths From Source to Target
date: 2023-12-28 15:28:34
tags: [leetcode, medium, grpah, backtrack]
---



https://leetcode.com/problems/all-paths-from-source-to-target/

```python
class Solution:
    def allPathsSourceTarget(self, G: List[List[int]]) -> List[List[int]]:
        def f(start,curr):
            if start==N-1:
                Z.append(curr[:])
                return
            for node in G[start]:
                curr.append(node)
                f(node,curr)
                curr.pop()
                

        if not G:
            return []
        N=len(G)
        Z=[]
        f(0,[0])
        return Z
```

