---
title: Greedy Candies
date: 2023-06-29 18:46:40
tags: [hankerrank, greedy]
---



https://www.hackerrank.com/challenges/candies/problem



```c++
long candies(int n, vector<int> arr) {
    if(arr.empty()){
        return 0;
    }
    vector<int> candies(n);
    int curr=1;
    candies[0]=1;
    for(int i=0;i+1<n;i++){
        if(arr[i+1]>arr[i]){
            curr++;
        }else{
            curr=1;
        }
        candies[i+1]=curr;
    }
    
    // deal with case like: [5,5,4,3,2]
    for(int i=n-1;i>=1;i--){
        if(arr[i-1]>arr[i] && candies[i-1]<=candies[i]){
           candies[i-1]=candies[i]+1; 
        }
    }
    long total=0;
    for(int i=0;i<n;i++){
        total+=candies[i];
    }
    return total;
}
```

