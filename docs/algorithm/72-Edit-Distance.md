---
title: 72. Edit Distance
date: 2023-12-09 19:33:14
tags: [leetcode, medium, DP]
---

https://leetcode.com/problems/edit-distance/



Given two strings `word1` and `word2`, return *the minimum number of operations required to convert `word1` to `word2`*.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character

 

**Example 1:**

```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

**Example 2:**

```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

 

**Constraints:**

- `0 <= word1.length, word2.length <= 500`
- `word1` and `word2` consist of lowercase English letters



Let `P[i][j]` denote the cost of transforming `a[0..i-1]` to `b[0..j-1]`.
For current operation, we have several choices.

Assume we have solved `P[i-1][j-1]`, `P[i-1][j]`, `P[i][j-1]`. Now we try to solve `P[i][j]`.
if current operation is delete, then we must have transformed `a[0..i-2]` to `b[0..j-1]`
if current operation is insert, then we must have transformed `a[0..i-1]` to `b[0..j-2]`
Otherwise, then we have transformed `a[0..i-1]` to `b[0..j-1]`.
If `a[i-1]=b[j-1]`, then current operation is do nothing.
If `a[i-1]!=b[j-1]`, then current operation is replacement.



Thus for i∈[1,n], j∈[1,m], we have 
$$
P[i][j]=\begin{cases} 
    P[i-1][j]+1
        &  \\
    P[i][j-1]+1
        &  \\
    P[i-1][j-1]
    	& a[i-1]=b[j-1] \\
    P[i-1][j-1]+1
    	& a[i-1]!=b[j-1]
\end{cases}
$$


**Base cases:**

The cost of transforming `a[0..i-1]` to empty string is always doing deletion i times .

Thus `P[i][0]=i` 

The cost of transforming emtpy string to `b[0..j-1]` is always doing insertion j times.

Thus `P[0][j]=j`

**Order of Computation and Final Solution**

Before we solve `P[i][j]`, we need to solve `P[i-1][j],P[i][j-1],P[i][j]`, thus the order should be increasing order of i and j.

The final solution is `P[n][m]`

**Time Complexity**

There are `n*m` subproblems, thus the time complexity is O(nm).

```python
class Solution:
    def minDistance(self, a: str, b: str) -> int:
        n=len(a)
        m=len(b)
        P=[[0]*(m+1) for _ in range(n+1)]
        if m==0:
            return n
        if n==0:
            return m
                
        for i in range(1,n+1):
            P[i][0]=i
        for j in range(1,m+1):
            P[0][j]=j
       
        
        for i in range(1,n+1):
            for j in range(1,m+1):
                if a[i-1]==b[j-1]:
                    P[i][j]=min(
                        P[i-1][j]+1, #delete
                        P[i][j-1]+1, #insert
                        P[i-1][j-1]  
                    )
                else:
                    P[i][j]=min(
                        P[i-1][j]+1,
                        P[i][j-1]+1,
                        P[i-1][j-1]+1 #replace
                    )
        return P[n][m]
```

