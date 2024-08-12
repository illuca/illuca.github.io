---
title: 704. Binary Search
date: 2023-05-21
tags: leetcode binary-search
---

https://leetcode.com/problems/binary-search/description/

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

 

**Example 1:**

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

**Example 2:**

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

 

**Constraints:**

- `1 <= nums.length <= 104`
- `-104 < nums[i], target < 104`
- All the integers in `nums` are **unique**.
- `nums` is sorted in ascending order.

```c++
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int N=nums.size();
        for(int left=0, right=N-1, mid=(right+left)>>1;left <= right;){
            //loop util nums[mid]==target
            //if len is 0 then break
            if(target==nums[mid]){
                return mid;
            } else if(target<nums[mid]){
                right=mid-1;
                mid=(left+right)>>1;
            }else{
                left=mid+1;
                mid=(left+right)>>1;
            }
        }
        return -1;
    }
};
```

This problem is easy, but pay attention to `mid=(left+right)>>1`;

For this problem, `1<=nums.length<=104`, so it should be fine. However, if the length is very large, then `left+right` may be overflow. To solve overflow, we use `mid=left+((right-left)>>1);` or `mid = ((unsigned int)low + (unsigned int)high)) >> 1;`

You can find more details on https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html.