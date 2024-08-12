---
title: 19. Remove Nth Node From End of List
date: 2024-01-08 22:24:15
tags: [leetcode, medium, linked list]
---

https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

Solution1: two iteration

```python
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy=ListNode()
        dummy.next=head
        p=dummy
        total=0
        while p:
            p=p.next
            total+=1
        m=total-n
        
        p=dummy
        k=0
        while k!=m:
            prev=p
            p=p.next
            k+=1
        prev.next=p.next
        return dummy.next
```

Solution2: one iteration

```python
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        q      p
        -1 1 2 3 4 5 $
             q     p       
        """
        dummy=ListNode(-1,head)
        p=dummy
        k=0
        while k!=n:
            p=p.next
            k+=1
        q=dummy
        while p.next:
            p=p.next
            q=q.next
        q.next=q.next.next
        return dummy.next
```



```python
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        def f(C):
            nonlocal k
            if C is None:
                return None
            elif C is not None:
                C.next=f(C.next)
                k+=1
                if k==n:
                    return C.next
                elif k!=n:
                    return C
        k=0
        return f(head)
```

