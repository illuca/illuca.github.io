---
title: Segment Tree
date: 2023-05-26 13:26:44
tags: [LCM, tree, segment tree]
---



# Range LCM Queries

```c++
#include <iostream>
#include<vector>
using namespace std;
//There is an array arr. It has N integers.
//There is another array query. Each element of query is a range for arr, like [L,R]
//[L,R] has many integers, my job is to find the least common multiple for them.
//Example: [3,6]=arr[3],arr[4],arr[5],arr[6]
//LCM(a,b)=a*b/GCD(a,b)

int gcd(int x, int y) {
    if (x==0){
        return y;
    }
    return gcd(y % x, x);
}

//LCM accepts two parameter: vector<int>, vector<int>
//return an integer
void LCM(vector<int> arr, vector<vector<int>> query){
    //let us firstly consider one query, query[0]
    //LCM of [i] and [i+1] is [i]*[i+1]/gcd([i],[i+1]
    //traverse from query[0][0],query[0][1]]
    for(auto v:query){
        int left=v[0], right=v[1];
        int lcm=1;
        for(int i=left; i<=right;i++){
            lcm = lcm * arr[i] / gcd(lcm, arr[i]);
        }
        cout << lcm << endl;
    }
}
int main() {
    vector<int> arr = {5, 7, 5, 2, 10, 12, 11, 17, 14, 1, 44};
    vector<vector<int>> query = {{2, 5},
                                 {5, 10},
                                 {0, 10}};
    LCM(arr, query);
    return 0;
}
```



Using segment tree can make it more efficient.

We use O(nlogn) time to convert the array into a tree. Then for each query, it only costs O(logn) time.

```c++
#include <iostream>
#include<vector>

using namespace std;

vector<int> tree;
vector<int> arr;

int gcd(int x, int y) {
    if (x == 0) {
        return y;
    }
    return gcd(y % x, x);
}

int lcm(int x, int y) {
    return x / gcd(x, y) * y;
}

//cut up util mouth of [lquery, rquery] can swallow [left, right]
int query(int root, int larr, int rarr, int lquery, int rquery) {
    // if two ranges have no common part
    if (lquery > rarr || rquery < larr) {
        // we must deal with such condition and lcm(1,x)=x
        return 1;
    }
    if (lquery <= larr && rarr <= rquery) {
        return tree[root];
    }
    //lcm = lcm of left part and right part
    int mid = larr + ((rarr - larr) >> 1);
    int l = query(2 * 	]]]]	]]]	root, larr, mid, lquery, rquery);
    int r = query(2 * root + 1, mid + 1, rarr, lquery, rquery);
    return lcm(l, r);
}

void build(int root, int larr, int rarr) {
    //if it is a leaf, then store the element of arr
    if (larr == rarr) {
        //leaf only has one element
        tree[root] = arr[larr];
        return;
    }
    int mid = larr + ((rarr - larr) >> 1);
    //turn left part of arr into a tree
    build(root * 2, larr, mid);
    //turn right part of arr into a tree
    build(root * 2 + 1, mid + 1, rarr);

    //root store the lcm of left and right node
    tree[root] = lcm(tree[root * 2], tree[root * 2 + 1]);
}

int main() {
    arr = {5, 7, 5, 2, 10, 12, 11, 17, 14, 1, 44};
    vector<vector<int>> queries = {{2, 5},
                                   {5, 10},
                                   {0, 10}};
    tree.resize(1000, 0);
    //init a tree array and convert arr into a tree

    //root index is 1, left is 2*root, right is 2*root+1
    build(1, 0, arr.size() - 1);
    for (auto q: queries) {
        //query start from root
        //lquery is q[0], rquery is q[1]
        cout << query(1, 0, arr.size() - 1, q[0], q[1]) << endl;
    }
    return 0;
}
```

