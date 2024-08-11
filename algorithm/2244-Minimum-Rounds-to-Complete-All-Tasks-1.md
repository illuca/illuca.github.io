---
title: 2244. Minimum Rounds to Complete All Tasks
date: 2023-06-29 14:57:20
tags: [leetcode, greedy]
---



You are given a **0-indexed** integer array `tasks`, where `tasks[i]` represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the **same difficulty level**.

Return *the **minimum** rounds required to complete all the tasks, or* `-1` *if it is not possible to complete all the tasks.*

 

**Example 1:**

```
Input: tasks = [2,2,3,3,2,4,4,4,4,4]
Output: 4
Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2. 
- In the second round, you complete 2 tasks of difficulty level 3. 
- In the third round, you complete 3 tasks of difficulty level 4. 
- In the fourth round, you complete 2 tasks of difficulty level 4.  
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.
```

**Example 2:**

```
Input: tasks = [2,3,3]
Output: -1
Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.
```





```c++
class Solution {
public:
    int getRounds(int value) {
        int round=0;
        //if value is 1, then return -1
        if(value==1){
            return -1;
        }
        //if value is odd, then it consists of value/3 number of 3's + one 2's.
        //if value is even, it consists of even number of 3 + y number of 2's.
        //[5,5,5,5] takes as many as 3's, but [5,5,5][5] is not valid
        //we can split one 3's, and it becomes [5,5] [5,5]
        return ceil(value/3.0);
        
    }
    int minimumRounds(vector<int>& tasks) {
        //traverse the tasks, and cal num and its occurrance times
        //iterate dict, for each level,we need 3x+2y rounds.
        map<int,int> dict;
        for(auto task:tasks){
            dict[task]++;
        }
        int res=0;
        for(auto it=dict.begin();it!=dict.end();it++){
            int curr=getRounds(it->second);
            if(curr==-1){
                return -1;
            }else {
                res+=curr;
            }
        }
        return res;
    }
};
```



**Correctness**

We should take as many 3's as possible. If at any step, we takes 

**Time complexity**

Say tasks has n elements.

We put every element of tasks into dict and each insertion takes O(1) expected time. It will take O(n) expected time.

We iterate every pair of dict, which will take O(n) time.

Overall, the time complexity is O(n) time.
