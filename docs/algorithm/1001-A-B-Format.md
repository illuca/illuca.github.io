---
title: 1001. A-B-Format
date: 2023-05-26 21:17:20
tags: PAT
---



Calculate *a*+*b* and output the sum in standard format -- that is, the digits must be separated into groups of three by commas (unless there are less than four digits).

### Input Specification:

Each input file contains one test case. Each case contains a pair of integers *a* and *b* where −10^6≤*a*,*b*≤10^6. The numbers are separated by a space.

### Output Specification:

For each test case, you should output the sum of *a* and *b* in one line. The sum must be written in the standard format.

### Sample Input:

```in
-1000000 9
```

### Sample Output:

```out
-999,991
```

```
Code Size Limit

16 KB

Time Limit

400 ms

Memory Limit

64 MB
```



Because -10^6<=a,b<=10^6 and the max number of signed integer in c++ is 2^31-1=2147483647 > 10^6, so we can just use int.

```c++
#include<string>
#include<cstdio>
#include<iostream>

using namespace std;

int main() {
    int a, b;
    scanf("%d %d", &a, &b);

    int summ = a + b;
// convert abs(summ) into a string and traverse the string

    string ans = "";
//insert , if current pointer is 3 and is not the last ch then ans=","+[curr]

    string s = to_string(abs(summ));
    string flag = "";
    if (summ < 0) {
        flag = "-";
    }

    //i=1, len-1, [len-1] is the right=1
    //i=2, len-2, [len-2] is the right=2, two digits
    int i = 1, len = s.size();
    for (;;) {
        int index = len - i;
        ans = s[index] + ans;
        if (i % 3 == 0 && len - i != 0) {
            ans = "," + ans;
        }
        i++;
        if (i > len) {
            //when i=len, [0]
            break;
        }

    }
    ans = flag + ans;
    cout << ans;
    return 0;
}
```

But actually, to_string give me the sign of a+b, so i don't need to check if a+b is less than 0. In addition, it use O(n) space, which can be optimised.

```c++
#include<string>
#include<cstdio>
#include<iostream>

using namespace std;

int main() {

    int a, b;
    scanf("%d %d", &a, &b);

    int sum = a + b;
    string s = to_string(sum);

    //from left to right
    //i=0, from right it is len th
    //i=1, from right it is len-1 th
    //i=len, 0th
    //if [i] is '-', print it
    //else:
    //if len-i is multiple of 4 and len-i is not 0 then print [i] and ,
    int len = s.size();
    for (int i = 0; i < len; i++) {
        if (s[i] == '-') {
            cout << s[i];
        } else {
            if ((len - i - 1) % 3 == 0 && i != len - 1) {
                cout << s[i] << ",";
            } else {
                cout << s[i];
            }
        }
    }

    return 0;
}

```

