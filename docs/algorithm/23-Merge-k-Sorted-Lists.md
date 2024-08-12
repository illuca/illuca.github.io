---
title: 23. Merge k Sorted Lists
date: 2023-11-08 01:58:49
tags: [leetcode, hard]
---







```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    """
    create a list ans.
    create a array A. A[i] stores the pointer of lists[i]
    create a priority queue named Q.
    For each pointer i in A, we add A[i].val to Q.
    While Q is not empty, do:
    get pointer i and value x from Q,
    add x to res
    after move forward the pointer i, if i is not null,
    then add i'.val, i' to Q.
    """
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        A,Q=[],[]
        ans=ListNode()
        w=ans
        for p in lists:
            if p is not None:
                A.append(p)
        for i,p in enumerate(A):
            heapq.heappush(Q,(p.val,i,p))
        while len(Q) > 0:
            x,i,p=heapq.heappop(Q)
            w.next=ListNode(x)
            w=w.next
            p=p.next
            if p is not None:
                heapq.heappush(Q,(p.val,i,p))
        return ans.next
```

