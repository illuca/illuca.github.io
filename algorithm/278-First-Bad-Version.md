---
title: 278. First Bad Version
date: 2023-05-22 13:40:13
tags: [leetcode, easy, binary-search]
---

https://leetcode.com/problems/first-bad-version/description/

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

**Example 1:**

```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

**Example 2:**

```
Input: n = 1, bad = 1
Output: 1
```

 

**Constraints:**

- `1 <= bad <= n <= 231 - 1`

```c++
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        //i am a manager and has a team developing a product.
        //the latest product fails. Because the new version is based on previous version. So i need to find the earliest version that fails.
        //i can use isBadVersion to check if it is bad.
        //i can't use API for too many times.
        //our product versions is like: [1,2,3....n], is in ascending order
        //check if [i] is bad and [i-1] is good then return [i]
            //if [i-1] is bad also then check left part
        //check if [i] is good and [i+1] is bad then return [i+1]
            //if [i+1] is good also then check right part
        int low=0,high=n;
        for(int mid=low+((high-low)>>1);low<=high;){
            if(isBadVersion(mid)){
                if(mid-1>=0&&!isBadVersion(mid-1)){
                    return mid;
                }else{
                    //check left
                    high=mid-1;
                    mid=low+((high-low)>>1);
                }
            }else {
                if(mid+1<=n-1&&isBadVersion(mid+1)){
                    return mid+1;
                }else{
                    //check right
                    low=mid+1;
                    mid=low+((high-low)>>1);
                }
            }
        }
        return n;
    }
};
```

It can be more clear.

```c++
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int left=1, right=n;
        for(;left<=right;){
            int mid=left+((right-left)>>1);
            if(isBadVersion(mid)){
                //check left. It may cause empty array.
                //[Bad1,Bad2]->[]. return left
                //[bad]->[]. return left
                right=mid-1;
            }else{
                //check right
                //[good,bad]->[bad]
                left=mid+1;
            }
        }
      	// when break, all exit is to return left.
        return left;
    }
};
```

Another way to think return value is to consider the break condition.

When not found, right=mid-1 < left. Of course we need the one in the back.
