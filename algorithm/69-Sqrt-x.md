---
title: 69. Sqrt(x)
date: 2023-05-22 14:46:04
tags: [leetcode, easy, binary-search]
---

Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

 

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

 

**Constraints:**

- 0 <= x <= $2^{31}$ - 1



```c++
class Solution {
public:
    int mySqrt(int x) {
        //i have a non-negative integer.
        //non-negative means i can be 0 or greater than 0.
        //i need to find the square root of x and if x is not an integer, then round it down.
        // if x=2, then mid=0+2/2=1
        // mid^2<2, so check right part=[mid,x]=[1,2], left=mid=1, mid=1+2/2=1
        // loop should meet: left+1<=right
        // int left=0, right=x;
        // if x=3,then mid=0+x/2=1
        // 1^2<3, so check right part=[1,3], left=1, mid=2
        // 2^2>3, so check left part=[1,2], right=2, mid=1
        // 1^2<3, so check right part=[1,2]
        long left=0, right=x;
        
        for(;;){
            long mid=left+((right-left)>>1);
            long mul=mid*mid;
            if(mul==x) {
                return mid;
            }else if(mul<x) {
                //check right
                if(left+1==right){
                    if(right*right==x) {
                        return right;
                    } else {
                        return left;
                    }
                }
                left=mid;
            }else {
                //check left
                if(left+1==right) {
                    if(right*right==x) {
                        return right;
                    }else {
                        return left;
                    }
                }
                right=mid;
            }
        }
    }
};
```





If you don't use `long`, you can use trick `mid==x/mid`. But be careful, 0 cannot be denominator.

```c++
class Solution {
public:
    int mySqrt(int x) {
        if(x==0){
            return 0;
        }
        int left=1, right=x;
        for(;left<=right;){
            int mid=left+(right-left)/2;
            if(mid==x/mid){
                return mid;
            }else if(mid>x/mid){
                //check left
                right=mid-1;
            }else{
                //check right
                left=mid+1;
            }
        }
        //if does not find, then left > right, return smaller one
        return right;
    }
};
```

About return value:

Say we have only two elements: `[1,2]`. `mid` is 1, in the front.  `right=mid-1` cause exit and we want the round down. right < left, so return right.

Say we have only 1 elements: `[1]`. `mid` is 1, in the front. `left=mid+1` cause exit and we want round down. right < left, so return right.





[2023-09-26 Tue 14:55]

Notice that the candidate answer is always in "less branch", thus we store the mid in that branch.

```python
class Solution:
    def mySqrt(self, x: int) -> int:
        low = 1
        high = x
        ans = 0

        while low <= high:
            mid = (low + high) // 2
            if mid * mid == x:
                return mid
            elif mid * mid < x:
                low = mid + 1
                ans = mid
            else:
                high = mid - 1
        return ans
```







