---
title: 55. Jump Game
date: 2024-01-03 23:11:09
tags: [leetcode, medium, DP, greedy]
---



https://leetcode.cn/problems/jump-game/?envType=study-plan-v2&envId=top-100-liked

Solution1: memorized recursion

```python
class Solution:
    def canJump(self, A: List[int]) -> bool:
        def f(i):
            if memo[i]==1:
                return True
            if memo[i]==-1:
                return False
            if memo[i]==0:
                M=min(i+A[i],target)
                for x in range(i+1,M+1):
                    if f(x):
                        memo[i]=True
                        return True
                memo[i]=-1
                return False

        memo=[0]*len(A)
        target=len(A)-1
        memo[-1]=1
        return f(0)
```

Solution2: Optimized memorized recursion

```python
class Solution:
    def canJump(self, A: List[int]) -> bool:
        memo=[0]*len(A)
        memo[-1]=1
        target=len(A)-1
        for i in range(len(A)-2,-1,-1):
            M=min(i+A[i],target)
            for j in range(i+1,M+1):
                # if any j can reach last index, then i can reach since i can jump up to M steps (1<=j<=M)
                if memo[j]==1:
                    memo[i]=1
                    break
        return memo[0]==1
```

Solution3: Greedy

If position i can reach the last index, then who can ever reach i will also can reach the last index.

It is like that we want to find a person can beat X. If A can beats X, then the one who is stronger than A can also beats X.

```python
class Solution:
    def canJump(self, A: List[int]) -> bool:
        last=len(A)-1
        for i in range(len(A)-1,-1,-1):
            if i+A[i]>=last:
                last=i
        return last==0
```

