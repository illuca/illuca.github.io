---
title: 1110. Delete Nodes And Return Forest
date: 2024-05-04 00:25:27
tags: [leetcode, dfs, tree]
---



后序遍历

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let R=[]
    let S=new Set(to_delete)
    if(!to_delete.includes(root.val)){
        R.push(root)
    }
    dfs(root)
    return R
    function dfs(curr){
        if(!curr){
            return null
        }
        curr.left=dfs(curr.left)
        curr.right=dfs(curr.right)
        if(S.has(curr.val)){
            console.log(curr.val)
            if(curr.left) {
                R.push(curr.left)
            }
            if(curr.right) {
                R.push(curr.right)
            }
            return null
        }else{
            return curr
        }
    }
};
```

