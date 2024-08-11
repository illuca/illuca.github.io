---
title: 25. Reverse Nodes in k-Group
date: 2023-12-25 18:36:24
tags: [leetcode, hard, linked list]
---

https://leetcode.com/problems/reverse-nodes-in-k-group/description/

Note: In reverse function, we cannot use p is not end.next to decide whether to break because during reverse, the node that end points to will be inserted after head.

Since node of pointer end is changing its position, thus it won't help us terminate the loop.

```python
class Solution:
    def reverseKGroup(self, H: Optional[ListNode], k: int) -> Optional[ListNode]:
        def moveToHead(h,prev,p):
            prev.next=p.next
            p.next=h.next
            h.next=p
        def nextK(h):
            p=h
            counter=0
            while p:
                p=p.next
                counter+=1
                if counter>=k:
                    break
            return p

        def reverse(h,end):
            prev=h.next
            p=prev.next
            counter=1
            while counter!=k:
                moveToHead(h,prev,p)
                p=prev.next
                counter+=1
            return prev

        if H is None:
            return None
        dummy=ListNode(-1)
        dummy.next=H
        h=dummy

        while True:
            end=nextK(h)
            if end is None:
                break
            h=reverse(h,end)
        return dummy.next
```

