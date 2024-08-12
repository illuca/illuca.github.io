---
title: 142. Linked List Cycle II
date: 2024-01-08 18:46:05
tags: [leetcode, medium, linked list]
---



https://leetcode.com/problems/linked-list-cycle-ii/

Solution1: hash table

```python
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        D={}
        p=head
        k=0
        while p:
            if p in D:
                return p
            else:
                D[p]=k
                k+=1
                p=p.next
        return None
```

Solution2: Floyd's cycle-finding algorithm

```python
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow=head
        fast=head
        while slow and fast:
            slow=slow.next
            if fast.next is None:
                fast=None
            elif fast.next is not None:
                fast=fast.next.next
            if slow==fast:
                break
        # pattern match exit of loop
        if fast is None:
            return None
        elif fast is not None:
            fast=head
            while slow!=fast:
                slow=slow.next
                fast=fast.next
            return slow
```



```python
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow=head
        fast=head
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
            if slow==fast:
                break
        # because our while has two exit, so we need to discuss
        if fast is None or fast.next is None:
            return None
        elif fast and fast.next:
            fast=head
            while fast!=slow:
                fast=fast.next
                slow=slow.next
            return fast
```

