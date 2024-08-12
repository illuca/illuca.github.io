---
title: 138. Copy List with Random Pointer
date: 2024-01-09 00:01:39
tags: [leetcode, medium, linked list]
---



Solution1: hash table

```python
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None
        D={}
        p=head
        k=0
        while p:
            D[p]=k
            p=p.next
            k+=1
        p=head
        A=[]
        while p:
            A.append(ListNode(p.val))
            p=p.next
        
        p=head
        for i in range(len(A)):
            if i<len(A)-1:
                A[i].next=A[i+1]
            if p.random is None:
                A[i].random=None
            elif p.random:
                A[i].random=A[D[p.random]]
            p=p.next
        return A[0]
```

