---
title: 148. Sort List
date: 2024-01-09 00:10:04
tags: [leetcode, medium, linked list, hash]
---

https://leetcode.com/problems/sort-list/

## Solution1: hash table

```python
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        p=head
        A=[]
        if not head:
            return None
        while p:
            A.append(p)
            p=p.next
        A.sort(key=lambda x:x.val)
        for i in range(len(A)-1):
            A[i].next=A[i+1]
        A[-1].next=None
        return A[0]
```



```javascript
var sortList = function(head) {
    if(!head){
        return head
    }
    let A=[]
    let p=head
    while(p){
        A.push(p)
        p=p.next
    }
    A.sort((a,b)=>{
        return a.val-b.val
    })
    for(let i=0;i<A.length-1;i++){
        A[i].next=A[i+1]
    }
    A[A.length-1].next=null
    return A[0]
};
```



## TopDown merge sort

**Divide:**

The original list is divided into two halves. And we repeat the process until the base case is reached, which is a sublist of 0 or 1 element.

**Conquer:**

The list that has 0 or 1 element is originally sorted.

**Combine:** 

We merge two sorted sublist into a single sorted list.

```javascript
var sortList = function(head) {
    if(!head || !head.next) {
        return head
    }
    let mid=getMidAndSplit(head)
    let left=sortList(head)
    let right=sortList(mid)
    return merge(left,right)

    function getMidAndSplit(head){
        let slow=head
        let fast=head
        let slowPrev=head
        while(fast && fast.next){
            [slow,slowPrev]=[slow.next,slow]
            fast=fast.next.next
        }
        slowPrev.next=null
        return slow
    }
    function merge(l,r){
        let dummy=new ListNode()
        let p=dummy
        while(l&&r){
            if(l.val<r.val){
                p.next=l
                l=l.next
            }else{
                p.next=r
                r=r.next
            }
            p=p.next
        }
        p.next=l?l:r
        return dummy.next
    }
};
```

