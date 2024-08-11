---
title: 57. Insert Interval
date: 2024-04-29 22:23:06
tags: [leetcode, array]
---



```typescript
function insert(A: number[][], T: number[]): number[][] {
    let i=0
    // currrent ends before T start
    let res=[]
    while(i<A.length && A[i][1]<T[0]){
        res.push(A[i])
        i+=1
    }
    let u=[T[0],T[1]]
    // handle overlap part
    while(i<A.length && A[i][0]<=T[1]){
        u[0]=Math.min(u[0],A[i][0])
        u[1]=Math.max(u[1],A[i][1])
        i+=1
    }
    res.push(u)
    // handle the rest
    while(i<A.length){
        res.push(A[i])
        i+=1
    }
    return res
};
```

