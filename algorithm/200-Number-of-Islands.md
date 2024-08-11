---
title: 200. Number of Islands
date: 2023-12-24 21:52:38
tags: [leetcode, medium, graph, DFS, BFS, modify original data]
---



https://leetcode.com/problems/number-of-islands/

Solution1: DFS

```python
class Solution:
    def numIslands(self, G: List[List[str]]) -> int:
        def f(i,j):
            if 0<=i<M and 0<=j<N and G[i][j]=='1':
                G[i][j]='0'
                f(i-1,j)
                f(i+1,j)
                f(i,j-1)
                f(i,j+1)
        M=len(G)
        N=len(G[0])
        ans=0
        for i in range(M):
            for j in range(N):
                if G[i][j]=='1':
                    f(i,j)
                    ans+=1
        return ans
```

Solution2: BFS

```python
class Solution:
    def numIslands(self, G: List[List[str]]) -> int:
        def f(i,j):
            nonlocal Q,G
            for i,j in [(i+1,j),(i-1,j),(i,j+1),(i,j-1)]:
                if 0<=i<M and 0<=j<N and G[i][j]=='1':
                    G[i][j]=0
                    Q.append((i,j))
        M=len(G)
        N=len(G[0])
        ans=0
        Q=deque()

        for i in range(M):
            for j in range(N):
                if G[i][j]=='1':
                    ans+=1
                    G[i][j]='0'
                    Q.append((i,j))
                    while Q:
                        x,y=Q.popleft()
                        f(x,y)
        return ans
```

