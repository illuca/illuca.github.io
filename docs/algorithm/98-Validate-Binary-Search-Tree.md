---
title: 98. Validate Binary Search Tree
date: 2023-12-20 21:27:24
tags: [leetcode, medium, inorder, DFS, BST]
---



https://leetcode.com/problems/validate-binary-search-tree/

Solution1: inorder traverse and store all values in array

```python
class Solution:
    def __init__(self):
        self.V=[]
    def isValidBST(self, R: Optional[TreeNode]) -> bool:
        def f(C):
            if not C:
                return
            f(C.left)
            self.V.append(C.val)
            f(C.right)
        f(R)
        for i in range(1,len(self.V)):
            if self.V[i-1]<self.V[i]:
                continue
            else:
                return False
        return True
```



Solution2: recursive DFS

```python
class Solution:
    def isValidBST(self,R: Optional[TreeNode]) -> bool:
        def f(C,m,M):
            if not C:
                return True
            if m and m.val>=C.val:
                return False
            if M and M.val<=C.val:
                return False
            return f(C.left,m,C) and f(C.right,C,M)
        return f(R,None,None)
    
class Solution:
    def isValidBST(self,R: Optional[TreeNode]) -> bool:
        def f(C,m,M):
            if not C:
                return True
            if m>=C.val:
                return False
            if M<=C.val:
                return False
            return f(C.left,m,C.val) and f(C.right,C.val,M)
        return f(R,-math.inf,M=math.inf)
    
```

Solution 3: iterative DFS

```python
class Solution:
    def isValidBST(self,R: Optional[TreeNode]) -> bool:
        if not R:
            return True
        S=[(R,-math.inf,math.inf)]
        while S:
            C,m,M=S.pop()
            if m>=C.val or C.val>=M:
                return False
            if C.left:
                S.append((C.left,m,C.val))
            if C.right:
                S.append((C.right,C.val,M))
        return True
```



Solution4: recursive inorder

```python
class Solution:
    def __init__(self):
        self.prev=None
    def isValidBST(self,R: Optional[TreeNode]) -> bool:
        def f(C):
            if not C:
                return True
            if f(C.left) and C.val>self.prev:
			               # ^ current > left
                self.prev=C.val
                return f(C.right)
            else:
                return False
        self.prev=-math.inf
        return f(R)
```

 Solution5: iterative inorder

```python
class Solution:
    def isValidBST(self,R: Optional[TreeNode]) -> bool:
        S=[]
        prev=-math.inf
        C=R
        while S or C:
            while C:
                S.append(C)
                C=C.left
            if not C:
                C=S.pop()
            if prev>=C.val:
                return False
            prev=C.val
            C=C.right
        return True
    
class Solution:
    def isValidBST(self,R: Optional[TreeNode]) -> bool:
        
        prev=-math.inf
        C=R
        if not C:
            return True
        S=[]
        while True:
            while C:
                S.append(C)
                C=C.left
            if not C and not S:
                break
            if not C:
                C=S.pop()
            if prev>=C.val:
                return False
            prev=C.val
            C=C.right
        return True
```

