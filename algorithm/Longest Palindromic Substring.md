---
title: Longest Palindromic Substring
date: 2023-05-14
tags: leetcode
---



Given a string `s`, return *the longest* 

*palindromic*

 *substring* in `s`.

**Example 1:**

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**

```
Input: s = "cbbd"
Output: "bb"
```

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

This is my solution 1.

```C++
#include <algorithm>
using namespace std;

class Solution {
public:
    bool isPalindrome(string &s, int index, int len) {
        //s[i]==s[s.size()-1-i]
        //s[0]==s[s.size()-1]
        int begin = index, end = index + len - 1;
        while (begin < end) {
            if (s[begin] != s[end]) {
                return false;
            } else {
                begin++;
                end--;
            }
        }
        return true;
    }

    string longestPalindrome(string s) {
        // for each s[i,j], we judge if it is palindrome.
        // if it is palindrome, then compare it with previous max length.
        int maxm = 1;
        string res;
        int start = 0;
        for (int i = 0; i < s.size(); i++) {
            // if has got a palindrome, then the next must bigger than current
            // j means length of substring
            for (int j = max(2, maxm); i + j - 1 < s.size(); j++) {
                if (isPalindrome(s, i, j)) {
                    if (maxm < j) {
                        start = i;
                        maxm = j;
                    }
                }
            }
        }
        return s.substr(start, maxm);
    }
};
```



Although using dynamic programming costs more time in leetcode, i still consider it is a good idea. This solution is referring to a solution in leetcode. After understanding that solution, i try to write code from my memory to check if i really undertstand. But i found it is too hard to understand his loop variable. Thus i just follow my heart and use recursive to solve that problem.

```C++
using namespace std;

class Solution {
public:

    int isPalindrome(int dp[][1000], int i, int j, string &s) {
        if (i == j) {
            dp[i][j] = 1;
        } else if (i + 1 == j) {
            // 'bb'
            dp[i][j] = s[i] == s[j];
        } else {
            if (dp[i + 1][j - 1] == -1) {
                dp[i][j] = s[i] == s[j] && isPalindrome(dp, i + 1, j - 1, s);
            } else {
                dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1] == 1;
            }
        }
        return dp[i][j];
    }

    string longestPalindrome(string s) {
        // init an array, dp[i][j]. 
        int n = s.size();
        int dp[1000][1000];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dp[i][j] = -1;
            }
        }
        // i means begin of the substring while j means end of the substring
        // dp[0][0]=true means s.substr(0,1) is palindrome
        // dp[0][3]=true means s.substr(0,4) is palindrome
        // dp[0][3]=s[0]==s[3] && dp[1][2]
        // dp[1][2]=s[1]==s[2]
        // thus dp[i][j]=s[i]==s[j] && dp[i+1][j-1], i+1 <= j-1
        // we check all the possibilities of substring
        int max_len = 0;
        int max_begin = 0, max_end = 0;

        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                // check if substring(i,j) is palindrome
                if (isPalindrome(dp, i, j, s)) {
                    int curr_len = j - i + 1;
                    if (curr_len > max_len) {
                        max_len = curr_len;
                        max_begin = i;
                        max_end = j;
                    }
                }
            }
        }
        // record begin and end of the max substring
        return s.substr(max_begin, max_end - max_begin + 1);
    }
};
```



I guess it is the best solution. It is really efficient.

https://leetcode.com/problems/longest-palindromic-substring/solutions/3401644/detailed-recursive-explaination-with-pictures-in-c-java-python-dp-two-pointers/

![LPS0.png](https://assets.leetcode.com/users/images/8e1ed821-5202-4801-9654-396e22b3f4ff_1681148824.1879745.png)

```C++
class Solution {
public:
    string ans = "";
    void expand(string &s , int left ,int right)
    {
        while(left >= 0 &&  right < s.size())
        {
            if(s[left] != s[right])
                break;
            left--,right++;
        }
        if(ans.size() < right - left )
            ans = s.substr(left + 1 , right - left - 1);
    }
    string longestPalindrome(string s) {
        for(int i = 0 ; i < s.size() ; i++)
        {
            expand(s , i , i);
            expand(s , i , i+1);
        }
        return ans;
    }
};
```

