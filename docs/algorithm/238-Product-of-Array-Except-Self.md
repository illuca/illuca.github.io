---
title: 238. Product of Array Except Self
date: 2023-12-19 17:05:28
tags: [leetcode, medium, array, hash]
---



method1: division

```python
class Solution:
    def productExceptSelf(self, A: List[int]) -> List[int]:
        P=1
        N=len(A)
        k=0
        for i in range(N):
            if A[i]==0:
                k+=1
            else:
                P=P*A[i]
        ans=[0]*N
        for i in range(N):
            if k>=2:
                P=0
            elif k==1:
                print(A[i])
                if A[i]==0:
                    ans[i]=P
                else:
                    ans[i]=0
            else:
                ans[i]=P//A[i]
        return ans
```



method2: hash: space O(n) without division

```python
class Solution:
    def productExceptSelf(self, A: List[int]) -> List[int]:
        L={}
        R={}
        N=len(A)
        ans=[0]*N
        P=1
        for i in range(N):
            P=P*A[i]
            L[i]=P
        P=1
        for i in range(N-1,-1,-1):
            P=P*A[i]
            R[i]=P
        for i in range(N):
            curr=1
            if i-1>=0:
                curr*=L[i-1]
            if i+1<N:
                curr*=R[i+1]
            ans[i]=curr
        return ans
```

method3: improve the method 2

```python
class Solution:
    def productExceptSelf(self, A: List[int]) -> List[int]:
        N=len(A)
        ans=[0]*N
        LP=1
        for i in range(N):
            LP*=A[i]
            ans[i]=LP
        RP=1
        for i in range(N-1,-1,-1):
            #right part
            curr=RP
            RP*=A[i]
            #left part
            if i-1>=0:
                curr*=ans[i-1]
            ans[i]=curr
        return ans
```

