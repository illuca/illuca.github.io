---
title: 155. Min Stack
date: 2024-01-05 16:52:22
tags: [leetcode, medium, stack]
---



https://leetcode.com/problems/min-stack/

Solution1: two stacks

```python
class MinStack:

    def __init__(self):
        self.A=[]
        self.C=[]

    def push(self, x: int) -> None:
        self.A.append(x)
        if not self.C or x<self.C[-1][0]:
            self.C.append([x,1])
        elif x==self.C[-1][0]:
            self.C[-1][1]+=1

    def pop(self) -> None:
        if self.A.pop()==self.C[-1][0]:
            self.C[-1][1]-=1
            if self.C[-1][1]==0:
                self.C.pop()

    def top(self) -> int:
        return self.A[-1]

    def getMin(self) -> int:
        return self.C[-1][0]
```

Solution2: always store minimum value on top of the stack

```python
class MinStack:

    def __init__(self):
        self.A=[]

    def push(self, x: int) -> None:
        if not self.A:
            self.A.append((x,x))
            return
        if self.A:
            m=min(self.A[-1][1],x)
            self.A.append((x,m))

    def pop(self) -> None:
        if not self.A:
            return
        if A:
            self.A.pop()

    def top(self) -> int:
        if not self.A:
            return -1
        if A:
            return self.A[-1][0]

    def getMin(self) -> int:
        if not self.A:
            return -1
        if A:
            return self.A[-1][1]
```

