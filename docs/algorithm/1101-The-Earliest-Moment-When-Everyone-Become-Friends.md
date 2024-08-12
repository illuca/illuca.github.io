---
title: 1101. The Earliest Moment When Everyone Become Friends
date: 2023-05-15
tags: leetcode
---



There are n people in a social group labeled from `0` to `n - 1`. You are given an array `logs` where `logs[i] = [timestampi, xi, yi]` indicates that `xi` and `yi` will be friends at the time `timestampi`.

Friendship is **symmetric**. That means if `a` is friends with `b`, then `b` is friends with `a`. Also, person `a` is acquainted with a person `b` if `a` is friends with `b`, or `a` is a friend of someone acquainted with `b`.

Return *the earliest time for which every person became acquainted with every other person*. If there is no such earliest time, return `-1`.

 

**Example 1:**

```
Input: logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], n = 6
Output: 20190301
Explanation: 
The first event occurs at timestamp = 20190101, and after 0 and 1 become friends, we have the following friendship groups [0,1], [2], [3], [4], [5].
The second event occurs at timestamp = 20190104, and after 3 and 4 become friends, we have the following friendship groups [0,1], [2], [3,4], [5].
The third event occurs at timestamp = 20190107, and after 2 and 3 become friends, we have the following friendship groups [0,1], [2,3,4], [5].
The fourth event occurs at timestamp = 20190211, and after 1 and 5 become friends, we have the following friendship groups [0,1,5], [2,3,4].
The fifth event occurs at timestamp = 20190224, and as 2 and 4 are already friends, nothing happens.
The sixth event occurs at timestamp = 20190301, and after 0 and 3 become friends, we all become friends.
```

**Example 2:**

```
Input: logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], n = 4
Output: 3
Explanation: At timestamp = 3, all the persons (i.e., 0, 1, 2, and 3) become friends.
```

 

**Constraints:**

- `2 <= n <= 100`
- `1 <= logs.length <= 104`
- `logs[i].length == 3`
- `0 <= timestampi <= 109`
- `0 <= xi, yi <= n - 1`
- `xi != yi`
- All the values `timestampi` are **unique**.
- All the pairs `(xi, yi)` occur at most one time in the input.



```C++
class Solution {
public:
    int findRoot(vector<int> &parent, int x) {
        // keep find next util next is -1
        int curr = x;
        while (1) {
            int next = parent[curr];
            if (next == -1) {
                return curr;
            } else {
                curr = next;
            }
        }
    }
    static bool compare(vector<int>&v1, vector<int>&v2) {
        return v1[0] < v2[0];
    }

    int earliestAcq(vector<vector<int>> &logs, int n) {
        // init a nodes array, every time connect two parent, we firstly find root of i, and parent[root]=j
        // remove j from leaves
        // if all leaves have same root, then return time. 
        // otherwise, keep traversing logs
        sort(logs.begin(), logs.end(), compare);
        vector<int> parent(n, -1);
        set<int> leaves;
        set<int> seen;
        for (int i = 0; i < logs.size(); i++) {
            int x = logs[i][1];
            int y = logs[i][2];
            seen.insert(x);
            seen.insert(y);
            int root = findRoot(parent, x);
            // if root is itself, it is a leaf
            if(findRoot(parent,y) == root) {
                continue;
            }
            if (x == root) {
                leaves.insert(x);
            }
            parent[root] = y;
            leaves.erase(y);
            if (seen.size() == n) {
                int curr_root = findRoot(parent, 0);
                bool connected = true;
                for (auto item: leaves) {
                    if(curr_root!=findRoot(parent, item)){
                        connected=false;
                        break;
                    }
                }
                if (connected) {
                    return logs[i][0];
                }
            }
        }
        return -1;
    }
};
```



After optimization:

```C++
#include<algorithm>
using namespace std;
class Solution {
    vector<int> parent;
    vector<int> rank;
public:
    int findRoot(int x){
        // keep find next util curr is itself
        if(parent[x]==x) {
            return x;
        } else {
            return findRoot(parent[x]);
        }
    }

    int earliestAcq(vector<vector<int>> &logs, int n) {
        // sort logs by time
        // init a parent array, every time we connect two people, we exec parent[root of i]=j
        // but we firstly check if i and j has been connected already.
            // namely find the root of j and compare it with root of i
            // if they equal, then they are connected.
        // we find root of i and parent[root]=j
        sort(logs.begin(), logs.end());
        parent.resize(n,0);
        for(int i=0;i<n;i++){
            parent[i]=i;
        }
        rank.resize(n,0);
        int groups=n;
        for(int i=0;i<logs.size();i++){
            int x=logs[i][1];
            int y=logs[i][2];
            int rootx=findRoot(x);
            int rooty=findRoot(y);
            if (rootx==rooty) {
                continue;
            }
            // At first, there are n independent person. if two root are not equal, then merge two groups
            // when only 1 group left, all people are connected
            // let node with higher rank be the parent
            if(rank[rootx]==rank[rooty]){
                parent[rootx]=rooty;
                rank[rooty]++;
            } else if(rank[rootx]<rank[rooty]){
                parent[rootx]=rooty;
            } else if(rank[rootx]>rank[rooty]) {
                parent[rooty]=rootx;
            }
            groups--;
            if(groups==1){
                return logs[i][0];
            }
        }
        // does not exist that time
        return -1;
    }
};
```

If rooty is root, its rank will be increased.
Then it will be more likely to be parent. The graph looks like a star and the root is in the center.
