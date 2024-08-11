---
title: 214. Shortest Palindrome
date: 2023-05-21
tags: [leetcode, KMP]
---

https://leetcode.com/problems/shortest-palindrome/

You are given a string `s`. You can convert `s` to a 

palindrome by adding characters in front of it.

Return *the shortest palindrome you can find by performing this transformation*.

**Example 1:**

```
Input: s = "aacecaaa"
Output: "aaacecaaa"
```

**Example 2:**

```
Input: s = "abcd"
Output: "dcbabcd"
```

**Constraints:**

- `0 <= s.length <= 5 * 104`
- `s` consists of lowercase English letters only.



Firstly, i use brute method to solve it, but get Time Limit.

```c++
class Solution {
public:
    void change(int &left, int &right) {
        bool isEven = (left+right)%2==0;
        if(isEven){
            right--;
        }else{
            left--;
        }
    }
    string shortestPalindrome(string s) {
        //there is a string s. I need to add chs to convert it to a palindrome.
        //I only can add chs in front of s.
        //There many ways to form a palindrome by adding chs. But you must add fewest chs so that you get the shortest palindrome.
        //find the center ch. check if the chs on both sides are equal. Cal the num of chs that equal.
        //it must cannot meet any ch that does not equal
        //loop util one pointer arrives bound
        // init mid and let it close to left end;
        int n=s.size();
        int left, right;

        int mid=n/2;
        if(n%2==1) {
            left=mid-1;
            right=mid+1;
        }else{
            left=mid-1;
            right=mid;
        }
        int start=0;
        while(1) {
            int pleft=left, pright=right;
            //initial value for pleft and pright in every loop
            while(1) {
                // loop util pleft arrives bound or appear not equal
                if(pleft < 0 || s[pleft]!=s[pright]) {
                    break;
                }
                pleft--;
                pright++;
            }
            //if left does not arrive bound, then mid--
            if(pleft>=0){
                change(left, right);
            } else{
                start=pright;
                break;
            }
        }

        // add [start, end].reverse to s
        string sub=s.substr(start, n-1-start+1);
        for(int i=0; i<sub.size(); i++){
            s=sub[i]+s;
        }
        return s;
    }
};
```

Actually, this problem can be converted to find the longest common part and we only need the last comparison. 

We compare [0:matched]==[i-matched, i]

We can use KMP to boost the process. Otherwise, every time we fail to match s[matched] and s[i]. We need to set i as N-1 and reset matched as 0.

```c++
class Solution {
public:
    void buildArray(string &s, vector<int> &back) {
        back[0] = 0;
        for (int len = 0, i = 1; i < s.size();) {
            if (s[len] == s[i]) {
                //match then increase both and set table
                // len means the num of matched
                back[i] = len + 1;
                len++;
                i++;
            } else {
                if (len==0) {
                    i++;
                } else {
                    len = back[len - 1];
                }
            }
        }
    }

    string shortestPalindrome(string s) {
        if (s.empty()) {
            return s;
        }
        int N = s.size();
        vector<int> back(N);
        buildArray(s, back);
        int matched = 0;
        for (int i = N - 1; i >= 0;) {
            //check if match then increase
            if (s[matched] == s[i]) {
                matched++;
                i--;
            } else {
                //reset matched
                if (matched==0) {
                    i--;
                } else {
                    matched = back[matched - 1];
                }
            }
        }
        //sub=[matched:]
        string sub = s.substr(matched);
        reverse(sub.begin(),sub.end());
        s=sub+s;
        return s;
    }
};
```

