---
title: 437. Path Sum III
date: 2023-12-23 16:45:03
tags: [leetcode, medium, tree, prefix sum, sub]
---

https://leetcode.com/problems/path-sum-iii/description/

It is simlar to https://leetcode.com/problems/subarray-sum-equals-k/description/

```python
class Solution:
    def pathSum(self, R: Optional[TreeNode], T: int) -> int:
        def f(C,S):
            nonlocal ans
            if C is None:
                return
            S+=C.val
            ans+=seen[S-T]
            seen[S]+=1
            f(C.left,S)
            f(C.right,S)
            seen[S]-=1
        ans=0
        seen=defaultdict(int)
        seen[0]=1
        f(R,0)
        return ans
```

