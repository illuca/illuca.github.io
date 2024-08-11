---
title: 207. Course Schedule
date: 2023-12-26 17:20:23
tags: [leetcode, medium, graph, topological sort, DFS]
---





```python
class Solution:
    def canFinish(self, N: int, G: List[List[int]]) -> bool:
        IN=[0]*N
        OUT=[[]*N for _ in range(N)]
        for g in G:
            fst,snd=g
            IN[fst]+=1
            OUT[snd].append(fst)
        Q=deque()

        seen=0
        #find all nodes with indegree=0 and store them in Q
        for i in range(len(IN)):
            if IN[i]==0:
                Q.append(i)
        while Q:
            a=Q.popleft()
            seen+=1
            for b in OUT[a]:
                IN[b]-=1
                if IN[b]==0:
                    Q.append(b)
        print(seen)
        return seen==N
```

