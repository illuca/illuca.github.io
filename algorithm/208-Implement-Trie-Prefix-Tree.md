---
title: 208. Implement Trie (Prefix Tree)
date: 2024-01-08 18:24:11
tags: [leetcode, medium, prefix, string]
---



https://leetcode.com/problems/implement-trie-prefix-tree/description/

```python
class TreeNode:
    def __init__(self,ch):
        self.ch=ch
        self.children={}
        self.isEnd=False

class Trie:

    def __init__(self):
        self.root=TreeNode("")
        
    def insert(self, W: str) -> None:
        C=self.root
        for w in W:
            if w in C.children:
                C=C.children[w]
            else:
                C.children[w]=TreeNode(w)
                C=C.children[w]
        C.isEnd=True
        
    def search(self, W: str) -> bool:
        C=self.root
        for w in W:
            if w in C.children:
                C=C.children[w]
            else:
                return False
        return C.isEnd
        

    def startsWith(self, W: str) -> bool:
        C=self.root
        for w in W:
            if w in C.children:
                C=C.children[w]
            else:
                return False
        return True
```

