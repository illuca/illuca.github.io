---
title: 416. Partition Equal Subset Sum
date: 2024-01-03 20:29:24
tags: [leetcode, medium, DP, backtrack]
---



https://leetcode.com/problems/partition-equal-subset-sum/description/

Since the function f has overlapped computation, thus @cache can store those parts to speed up.

```python
class Solution:
    def canPartition(self, A: List[int]) -> bool:
        @cache
        def f(curr,l,r):
            if curr<0 or r<0:
                return False
            if curr==0:
                return True
            if curr>0:
                return f(curr-A[r],l,r-1) or f(curr,l,r-1)
        C=0
        for i in range(len(A)):
            C+=A[i]
        if C%2==1:
            return False
        target=C//2
        return f(target,0,len(A)-1)
```



Use memo:

`memo[i][j]` checks if A[i] has been calculated. 

`memo[i][j]` stores the result of include A[i] and exclude A[i].

```ts
function canPartition(A: number[]): boolean {
    let total = A.reduce((acc, curr) => acc + curr, 0)
    if (total % 2 === 1) return false
    let target = total / 2
    let memo = new Array(A.length).fill(0).map(_ => new Array(target + 1).fill(0))
    return f(0, target)
    function f(l, curr) {
        if (curr == 0) return true
        if (curr < 0 || l >= A.length) return false
        if (curr > 0) {
            if (memo[l][curr] !== 0) {
                return memo[l][curr]
            } else {
                memo[l][curr] = f(l + 1, curr - A[l]) || f(l + 1, curr)
                return memo[l][curr]
            }
        }
    }
};
```



Unfortunately, python gets time limit exceeded.

```python
class Solution:
    def canPartition(self, A: List[int]) -> bool:
        def f(curr, l):
            if curr < 0 or l >= len(A):
                return False
            if curr == 0:
                return True
            if curr > 0:
                if memo[l][target] != 0:
                    return memo[l][target]
                else:
                    memo[l][target] = f(curr - A[l], l + 1) or f(curr, l + 1)
                    return memo[l][target]

        total = sum(A)
        if total % 2 == 1:
            return False
        target = total // 2
        memo = [[0] * (target + 1) for _ in range(len(A))]
        return f(target, 0)
```



we can also use backtracking+memo

```ts
let log=console.log.bind(console)

function canPartition(A: number[]): boolean {
    // for every item x in A, there is two possible, include x or not.
    // it is like a tree
    // to speed up, we need to build a memo and memo[i][j] 
    // means the result of reaching j given A[i]
    let total=A.reduce((acc,curr)=>acc+curr,0)
    if(total%2==1) return false
    let target=total/2
    let memo=new Array(A.length+5).fill(0).map(_=>new Array(target+5).fill(0))
    return f(0,0)
    function f(l, curr) {
        if(curr==target) return true
        if(l>=A.length||curr>target) return false
        if(curr<target){
            if(memo[l][curr]!==0) {
                return memo[l][curr]
            }else{
                for(let i=l;i<A.length;i++){
                    if(f(i+1,curr+A[l]) || f(i+1,curr)){
                        // if decision at l+1 can reach a solution to partition, 
                        // then current decision can reach too
                        memo[i][curr]=true
                        return true
                    }
                }
                memo[l][curr]=false
                return false
            }
        }
    }
};
```



```ts
let log=console.log.bind(console)

function canPartition(A: number[]): boolean {
    // for every item x in A, there is two possible, include x or not.
    // it is like a tree
    // to speed up, we need to build a memo and memo[i][j] 
    // means the result of reaching j given A[i]
    let total=A.reduce((acc,curr)=>acc+curr,0)
    if(total%2==1) return false
    let target=total/2
    let memo=new Array(A.length+5).fill(0).map(_=>new Array(target+5).fill(0))
    return f(0,0)
    function f(l, curr) {
        if(curr==target) return true
        if(l>=A.length||curr>target) return false
        if(curr<target){
            if(memo[l][curr]!==0) {
                return memo[l][curr]
            }else{
                memo[l][curr]=f(l+1,curr+A[l])||f(l+1,curr)
                return memo[l][curr]
            }
        }
    }
};
```

