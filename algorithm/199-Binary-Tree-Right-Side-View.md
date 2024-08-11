---
title: 199. Binary Tree Right Side View
date: 2023-12-21 15:11:18
tags: [leetcode, medium, tree, DFS, BFS]
---



https://leetcode.com/problems/binary-tree-right-side-view/

Solution1: recursive DFS

```python
class Solution:
    def __init__(self):
        self.k=-1
    def rightSideView(self, R: Optional[TreeNode]) -> List[int]:
        def f(C,k):
            if not C:
                return
            if k>self.k:
                self.k+=1
                ans.append(C.val)
            f(C.right,k+1)
            f(C.left,k+1)
        ans=[]
        f(R,0)
        return ans
```



Solution2: BFS(one queue + traverse current level by storing length)

```python
class Solution:
    def rightSideView(self, R: Optional[TreeNode]) -> List[int]:
        if not R:
            return []
        Q=deque([R])
        ans=[]
        while Q:
            L=len(Q)
            for i in range(L):
                C=Q.popleft()
                if i==L-1: # it is the right most node in current level
                    ans.append(C.val)
                if C.left:
                    Q.append(C.left)
                if C.right:
                    Q.append(C.right)
                
        return ans
```

Solution3: BFS(one queue + None sentinel)

```python
class Solution:
    def rightSideView(self, R: Optional[TreeNode]) -> List[int]:
        if not R:
            return []
        Q=deque([R,None])
        ans=[]
        while Q:
            C=Q.popleft()
            while C is not None:
                if C.left is not None:
                    Q.append(C.left)
                if C.right is not None:
                    Q.append(C.right)
                prev=C
                C=Q.popleft()
            ans.append(prev.val)
            if len(Q)>0:
                Q.append(None)
        return ans
```

Solution4: BFS(double queue)

```python
class Solution:
    def rightSideView(self, R: Optional[TreeNode]) -> List[int]:
        if R is None:
            return []
        Q=deque([R])
        ans=[]
        while Q:
            N=deque()
            ans.append(Q[-1].val)
            while Q:
                C=Q.popleft()
                if C.left:
                    N.append(C.left)
                if C.right:
                    N.append(C.right)
            Q=N
        return ans
    
# or
class Solution:
    def rightSideView(self, R: Optional[TreeNode]) -> List[int]:
        if R is None:
            return []
        Q=deque([R])
        ans=[]
        while Q:
            N=deque()
            while Q:
                C=Q.popleft()
                if C.left:
                    N.append(C.left)
                if C.right:
                    N.append(C.right)
            #last poped node is the right most node
            ans.append(C.val)
            Q=N
        return ans
```

