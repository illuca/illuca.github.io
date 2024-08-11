---
title: 1055. Shortest Way to Form String
date: 2023-05-16
tags: leetcode
---

https://leetcode.com/problems/shortest-way-to-form-string/description/

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

Given two strings `source` and `target`, return *the minimum number of **subsequences** of* `source` *such that their concatenation equals* `target`. If the task is impossible, return `-1`.

 

**Example 1:**

```
Input: source = "abc", target = "abcbc"
Output: 2
Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".
```

**Example 2:**

```
Input: source = "abc", target = "acdbc"
Output: -1
Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.
```

**Example 3:**

```
Input: source = "xyz", target = "xzyxz"
Output: 3
Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
```

 

**Constraints:**

- `1 <= source.length, target.length <= 1000`
- `source` and `target` consist of lowercase English letters.

```C++
class Solution {
public:
    int shortestWay(string source, string target) {
        //explain subsequence. it is a special string that remain relative position in original string
        //we use sub of source and use them to form target
        //traverse target and for each target[i] try to find matched ch in source. so we need to traverse source.
            //traverse source
                //if find matched ch in source, then increase both string index and try to find next match ch
            //if in current loop, num of matched is 0, then return -1
            //otherwise i+=num of matched
        int loops=0;
        for(int i=0;i<target.size();){
            int matched=0;
            for(int j=0;j<source.size();j++){
                if(target[i+matched]==source[j]){
                    matched++;
                }
            }
            if(matched==0){
                return -1;
            }else{
                i+=matched;
                loops++;
            }
        }
        return loops;
    }
};
```

Beats 100% and only one submit no debug. It seems finally i grasp some trick? Amazing.