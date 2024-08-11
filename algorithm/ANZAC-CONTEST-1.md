---
title: ANZAC CONTEST 1
date: 2023-03-25
tags: UNSW
---

# A

![image-20230514013121971](https://p.ipic.vip/e81xxn.png)

```C++
#include <iostream>
#include <vector>
#include<unordered_map>
#include<unordered_set>

using namespace std;

int main() {
    int N;
    cin >> N;
    // init an unordered map.
    unordered_map<int, int> map;
    unordered_set<int> values;
    map[0] = 0;
    map[1] = 1;
    // keep cal fib until if fib number > N
    int i = 2;
    while (1) {
        //cal fib util fib number > N
        int fib = map[i - 1] + map[i - 2];
        if (fib > N) {
            break;
        }
        map[i] = fib;
        values.insert(fib);
        //cal next
        i++;
    }
    for (int i = 1; i <= N; i++) {
        if (values.count(i)) {
            cout << "fizz";
        } else {
            cout << "buzz";
        }
    }
}
```



# B

![image-20230514013012760](https://p.ipic.vip/ko3pol.png)

```c++
#include <iostream>
#include <vector>

using namespace std;

int main() {
    // input two numbers
    // first is the number to insert
    // second is the original number
    // our aim is to insert at a certain location to make the output biggest
    // find the first num that less than number to insert. 789 6->7896, 749 5->7549
    // 749 0->7490
    // 0 0 ->0
    int x;
    string number;
    cin >> x;
    cin >> number;
    vector<int> result;
    bool inserted = false;
    for (int i = 0; i < number.size(); i++) {
        int curr = number[i] - '0';
        if (curr <= x && !inserted) {
            number.insert(i, to_string(x));
            inserted = true;
            break;
        }
        result.push_back(curr);
    }
    if (!inserted) {
        number.push_back('0' + x);
    }
    cout << number << endl;
    return 0;
}
```

## C

Take 20 as example:
20=17+3=13+7
17-3 has biggest diff.
14=11-3=8 step=1
8=5+3 step=2
5-3=2 step=3

First we has two pointers, left is 2 and right is x-1;
break: if left greater than right or left+right=x and right-left is even.
Then set x as right-left and loop again util right-left is 2 or 0.

```C++
#include <iostream>
using namespace std;

bool isPrime(int num) {
    // divide num into 2 part like 11/2+1=6, i=[2,5]
    // 12/2+1=7,i=[2,6]
    // 1/2+1=1
    if (num==1) {
        return false;
    }
    for (int i = 2; i < num / 2 + 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

void getPrime(int &left, int &right, int x) {
    //loop util right - left is even, otherwise right--.
    while (1) {
        //loop util right is prime
        while (1) {
            if (isPrime(right)) {
                break;
            } else {
                right--;
            }
        }
        left = x - right;
        if (!isPrime(left) || (right - left) % 2 != 0) {
            right--;
        } else {
            break;
        }
    }
}

int main() {
    int x;
    cin >> x;
    int steps = 0;
    int left = 2, right = x - 1;
    while (1) {
        getPrime(left, right, x);
        int diff = right - left;
        steps++;
        if (diff == 0 || diff == 2) {
            break;
        } else {
            x = diff;
            right = x - 1;
            left = 2;
        }
    }
    cout << steps;
    return 0;
}
```



# H



![image-20230514013149755](https://p.ipic.vip/jtxhry.png)