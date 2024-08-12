---
title: 1002 A+B for Polynomials
date: 2023-05-26 23:47:19
tags: PAT
---

https://pintia.cn/problem-sets/994805342720868352/exam/problems/994805526272000000



```c++
#include <iostream>
#include<string>
#include<cstdio>
#include<map>

using namespace std;

int main() {
    int k1;
    cin >> k1;
    map<int, float, greater<>> m;
    for (int i = 0; i < k1; i++) {
        int key;
        float value;
        cin >> key;
        cin >> value;
        m[key] += value;
        if (m[key]==0) {
            m.erase(key);
        }
    }
    int k2;
    cin >> k2;
    for (int i = 0; i < k2; i++) {
        int key;
        float value;
        cin >> key;
        cin >> value;
        m[key] += value;
        if (m[key]==0) {
            m.erase(key);
        }
    }
    cout << m.size();
    for (auto &pair: m) {
        if (pair.second != 0) {
            printf(" %d %.1f", pair.first, pair.second);
        }
    }
    return 0;
}
```

