---
title: KMP
date: 2023-05-20
tags: [leetcode, KMP]
---





```c++
#include <iostream>
#include <string>

using namespace std;

int getLongestCommonPartSize(string &pat, int len) {
    // For each sub string, we have [0, end-1-i], [1+i, end]
    for (int i = 0; i < len - 1; i++) {
        //check if prefix[m]==suffix[m]
        int m = 0;
        int suffixLen = len - 1 - i;
        for (; m < suffixLen; m++) {
            if (pat[m] != pat[1 + i + m]) {
                break;
            }
        }
        if (m == suffixLen) {
            // match
            return m;
        }
    }
    return 0;
}

void KMPSearch(string &pat, string &txt) {
    //construct suffix table
    //suffix table has the same size as pat

    //ababa
    //0 a
    //0 ab
    //1 aba
    //2 abab
    int suffix[pat.size()];
    suffix[0] = -1;
    // we totally have pat.size()-1 sub string
    //i is the size of substring
    for (int len = 1; len < pat.size(); len++) {
        suffix[len] = getLongestCommonPartSize(pat, len);
    }

    //check if pat[j]==txt[i]
    int j = 0, i = 0;
    while (1) {
        //break if one of the pointers overflow
        //if match, then both pointer++
        //else: check if can move(big's pointer+small's size==big's size)
        // move pat to where fails
        //set pat's p as suffix[p]
        if (i >= txt.size()) {
            break;
        }
        if (j >= pat.size()) {
            cout << i - pat.size() << endl;
            j = 0;
        }
        if (pat[j] == txt[i]) {
            j++;
            i++;
        } else {
            // check can move
            if (i + pat.size() == txt.size()) {
                break;
            }
            if (suffix[j] == -1) {
                i++;
                j = 0;
            } else {
                j = suffix[j];
            }
        }
    }
    if (j >= pat.size()) {
        cout << i - pat.size() << endl;
    }
}

int main() {
    string txt = "ABABDABACDABABCABAB";
    string pat = "ABABCABAB";
    KMPSearch(pat, txt);
    return 0;
}

```

The size of pat is M.

The process of build suffix table is O(M^2), we need to optimize it.

There are ways of implementing the loop.

One way is:

```c++
//if matched then increase both pointers and set table
//else go back to find previous matched to start

for(int len=0, i=1;i<s.size();){
  if (s[len] == s[i]) {
    len++;
    back[i] = len;
    i++;
  } else {
    if (len==0) {
      i++;
    } else {
      len = back[len - 1];
    }
  }
}
```

Another is:

```c++
//loop util find a character matched
for(int len=0, i=1;i<s.size();){
  while(len>=1&&s[i]!=s[len]){
    len=back[len-1];
  }
  if(len<1&&s[i]!=s[len]) {
    i++;
  }else{
    //matched
    len++;
    back[i]=len;
    i++;
  }
}
```

The prefix and suffix are like two eras before and after, all conditions are the same, but at a certain point in time, the latter era B is destroyed. Therefore, era A, at that point, needs to make a different move than B to possibly succeed.

Era A = [Common Part + Different Part]
Era B = [Common Part]



Well, may be the DFA(deterministic finite automaton) can give me another angle to understand KMP.

https://www.youtube.com/watch?v=hBXzOq_1yRk
