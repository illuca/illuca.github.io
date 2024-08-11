---
title: 347. Top K Frequent Elements
date: 2024-01-03 21:13:08
tags: [leetcode, medium, heap]
---

https://leetcode.com/problems/top-k-frequent-elements/description/

Solution1: max heap

```python
class Solution:
    def topKFrequent(self, A: List[int], k: int) -> List[int]:
        D=defaultdict(int)
        for a in A:
            D[a]+=1
        H=[]
        t=0
        for key,value in D.items():
            t+=1
            heapq.heappush(H,(-value,t,key))
        Z=[]
        for i in range(k):
            _,_,x=heapq.heappop(H)
            Z.append(x)
        return Z
```

Solution2: min heap

```python
class Solution:
    def topKFrequent(self, A: List[int], k: int) -> List[int]:
        D=defaultdict(int)
        for a in A:
            D[a]+=1
        H=[]
        t=0
        for num,freq in D.items():
            if len(H)>=k:
                if freq>H[0][0]:
                    heapq.heappop(H)
                else:
                    continue
            t+=1
            heapq.heappush(H,(freq,t,num))
        return [x[2] for x in H]
```

