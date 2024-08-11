---
title: 56. Merge Intervals
date: 2024-04-29 23:15:04
tags: [leetcode, array]
---



```ts
function merge(A: number[][]): number[][] {
    if(!A){
        return A
    }
    let [i,k]=[1,0]
    A.sort((a,b)=>{
        return a[0]-b[0]
    })
    let R=[A[0]]
    while(true){
        while(i<A.length && R[k][1]<A[i][0]) {
            R.push(A[i])
            k++
            i++
        }
        if(i>=A.length) break
        R[k][1]=Math.max(R[k][1],A[i][1])
        i+=1
    }
    return R
};
```

It can be simplified:

```ts
function merge(A: number[][]): number[][] {
    if(!A){
        return A
    }
    let [i,k]=[1,0]
    A.sort((a,b)=>{
        return a[0]-b[0]
    })
    let R=[]
    for(let i=0;i<A.length;i++){
        if(R.length==0){
            R.push(A[i])
            continue
        }
        if(R[R.length-1][1]<A[i][0]){
            R.push(A[i])
            continue
        }
        if(R[R.length-1][1]>=A[i][0]){
            R[R.length-1][1]=Math.max(R[R.length-1][1], A[i][1])
        }
    }
    return R
};
```

