---
title: 80. Remove Duplicates from Sorted Array II
date: 2024-04-28 17:28:53
tags: [leetcode, array, two pointers]
---



```javascript
var removeDuplicates = function(nums) {
    let k=0,counter=1
    for(let i=0;i<nums.length;i++){
        if(i==0){
            nums[k]=nums[i]
            k++
            continue
        }
        if(nums[i]==nums[i-1]){
            counter++
        }else{
            counter=1
        }
        //only keep those counter less than 2
        if(counter<=2){
            nums[k]=nums[i]
            k++
        }

    }
    return k
};
```

