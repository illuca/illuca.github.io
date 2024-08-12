---
title: 152. Maximum Product Subarray
date: 2024-01-01 23:18:29
tags: [leetcode, medium, DP]
---



https://leetcode.com/problems/maximum-product-subarray/description/

```python
class Solution:
    def maxProduct(self, A: List[int]) -> int:
        if not A:
            return 0
        m=M=A[0]
        Z=M
        for i in range(1,len(A)):
            m,M=min(A[i],m*A[i],M*A[i]),max(A[i],m*A[i],M*A[i])
            Z=max(Z,M)
            print(m,M)
        return Z
```

Solution2: Kadane's algorithm:

https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

Once we meet zero, we reset our accumulated product.

If the number of negative is even, then one forward loop will produce the maximum.

If the number of positive is odd, then both forward loop and backward loop will produce a maximum.

The forward loop will ignore the last negative number while the backward loop will ignore the first negative number.

We select the larger one.

```python
class Solution:
    def maxProduct(self, A: List[int]) -> int:
        C=1
        M=A[0]
        # forward loop
        for i in range(len(A)):
            C=C*A[i]
            M=max(M,C)
            if A[i]==0:
                C=1
        C=1
        # backward loop
        for i in range(len(A)-1,-1,-1):
            C=C*A[i]
            M=max(M,C)
            if A[i]==0:
                C=1
        return M
```

