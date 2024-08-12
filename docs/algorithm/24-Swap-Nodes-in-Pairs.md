---
title: 24. Swap Nodes in Pairs
date: 2024-01-08 23:08:01
tags: [leetcode, medium, linked list]
---



https://leetcode.com/problems/swap-nodes-in-pairs/description/

```python
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def swap(prev):
            p=prev.next
            if prev.next is None or prev.next.next is None:
                return None
            elif prev.next and prev.next.next:
                p=prev.next
                q=prev.next.next
                prev.next=p.next
                p.next=q.next
                q.next=p
                return p
        dummy=ListNode(-1,head)
        prev=dummy
        while prev:
            prev=swap(prev)
        return dummy.next
```



The simplest solution:

```python
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        A=[]
        p=head
        while p:
            A.append(p)
            p=p.next
        
        for i in range(1,len(A),2):
            A[i],A[i-1]=A[i-1],A[i]
        dummy=ListNode(-1)
        p=dummy
        for i in range(len(A)):
            p.next=A[i]
            p=p.next
        A[-1].next=None
        return dummy.next
```

