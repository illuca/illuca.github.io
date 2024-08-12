---
title: 46. Permutations
date: 2023-11-08 00:43:47
tags: [leetcode, medium]
---





```python
class Solution:
    """
    create a 3D array dp.
    let dp[i] denote the permutations with first i elements.
    denote size of nums as N
    so dp[N] stores the permutations with first N elements.
    basic:
    dp[0]=[[-1]]
    dp[1]=[[nums[0]]]
    """
    def permute(self, nums: List[int]) -> List[List[int]]:
        def insert(l,curr)->List[List]:
            res=[]
            for i in range(len(l)+1):
                res.append(l[:i]+[curr]+l[i:])
            return res

        N=len(nums)
        dp=[[[-1]],[[nums[0]]]]
        for i in range(1,N):
            curr=nums[i]
            tmp=[]
            for l in dp[i]:
                newE:List[List] = insert(l, curr)
                tmp.extend(newE)
            dp.append(tmp)
        return dp[N]
```





```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        """
        first ans is empty
        for backtrack, start from [],
        for each item in nums, we add it to the end of curr, then do backtrack
        each item corresponds to a function call
        [1] -> [1,2] -> [1,2,3]
            -> [1,3] -> [1,3,2]
        [2] -> [2,1] -> [2,1,3]
            -> [2,3] -> [2,3,1]
        [3] -> [3,1] -> [3,1,2]
            -> [3,2] -> [3,2,1]
        for each call, we do iteration for nums, so it costs O(n)
        during iteration, for each item, we call backtrack, so there are O(n) backtrack
        
        """
        
        def backtrack(curr):
            nonlocal ans
            if len(curr) == len(nums):
                ans.append(curr[:])
                return
            for num in nums:
                if num not in curr:
                    curr.append(num)
                    backtrack(curr)
                    curr.pop()
        ans = []
        backtrack([])
        return ans
```

