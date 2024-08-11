---
title: 744. Find Smallest Letter Greater Than Target
date: 2023-05-21 23:34:56
tags: [leetcode, easy, binary-search]
---

https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

You are given an array of characters `letters` that is sorted in **non-decreasing order**, and a character `target`. There are **at least two different** characters in `letters`.

Return *the smallest character in* `letters` *that is lexicographically greater than* `target`. If such a character does not exist, return the first character in `letters`.

 

**Example 1:**

```
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
```

**Example 2:**

```
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
```

**Example 3:**

```
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
```

 

**Constraints:**

- `2 <= letters.length <= 104`
- `letters[i]` is a lowercase English letter.
- `letters` is sorted in **non-decreasing** order.
- `letters` contains at least two different characters.
- `target` is a lowercase English letter.

```c++
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
      	//idea
        //use binary search to find the char that greater than target.
        //if target is less than [i] then check right part.
        //if target equals [i] then check if [i+1] greater than target, then return [i+1]. but check i+1 overflow first.
        //if target greater than [i] then check if [i-1] equals target
        int N=letters.size();
        int low=0, high=N-1;
        for(int mid=high>>1;low<=high;){
            if(target==letters[mid]){
                if(mid+1<N&&target<letters[mid+1]) {
                    return letters[mid+1];
                }
                // check right part
                low=mid+1;
                mid=low+((high-low)>>1);
            } else if(target<letters[mid]) {
                //ensure [mid] is the first to be greater than target
                if(mid-1>=0&&target>=letters[mid-1]){
                    return letters[mid];
                }
                if(mid==0) {
                    return letters[0];
                }
                //check left
                high=mid-1;
                mid=low+((high-low)>>1);
            } else { // target>letters[mid]
                //check right
                low=mid+1;
                mid=low+((high-low)>>1);
            }
        }
        return letters[0];
    }
};
```

Of course you can use `upper_bound`.

```c++
auto it = upper_bound(letters.begin(), letters.end(), target);
if(it == letters.end()) {
  return letters[0];
}else{
  return *it;
}
```

Or even just one line

```c++
return letters[(upper_bound(letters.begin(), letters.end(), target)-letters.begin())%letters.size()];
```



[2023-09-26 Tue 14:50]

This solution is inspired by find max square root of x. We store an intermediate variable.

Notice that the candidate answer is always in "greater branch", thus in that branch, we store the candidate mid.

```c++
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int N=letters.size();
        int ans=0;
        int low=0, high=N-1;
        while(low<=high) {
            int mid=(low+high)>>1;
            if (letters[mid] == target 
                && mid+1 < N && letters[mid+1] > target) {
                return letters[mid+1];
            }
            
            if (letters[mid]<=target) {
                low=mid+1;
            } else {
                // greater branch
                high=mid-1;
                ans=mid;
            }
        }
        //not found
        if(letters[ans]<=target) {
            ans=0;
        }

        return letters[ans];
    }
};
```

