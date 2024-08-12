---
title: 994. Rotting Oranges
date: 2023-12-25 23:47:45
tags: [leetcode, medium, graph, BFS]
---



https://leetcode.com/problems/rotting-oranges/

```python
class Solution:
    def orangesRotting(self, G: List[List[int]]) -> int:
        def f(i,j,k):
            for x,y in [(i+1,j),(i-1,j),(i,j+1),(i,j-1)]:
                if 0<=x<M and 0<=y<N and G[x][y]==1:
                    Q.append((x,y,k+1))
                    G[x][y]=0

        M=len(G)
        N=len(G[0])
        ans=0
        Q=deque()
        for i in range(M):
            for j in range(N):
                if G[i][j]==2:
                    Q.append((i,j,0))  
        while Q:
            i,j,k=Q.popleft()
            ans=max(ans,k)
            f(i,j,k)          

        for i in range(M):
            for j in range(N):
                if G[i][j]==1:
                    ans=-1
        return ans
```



