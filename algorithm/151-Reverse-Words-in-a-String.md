---
title: 151. Reverse Words in a String
date: 2024-04-30 23:02:59
tags: [leetcode, string]
---



```ts
function reverseWords(s: string): string {
    let tmp=[]
    let A=[]
    for(let i=0;i<s.length;i++){
        if(s[i]===' '){
            if(tmp.length>0) {
                A.push(tmp.join(''))
                tmp=[]
            }
            continue
        }
        if(s[i]!==' '){
            tmp.push(s[i])
        }
    }
    if(tmp.length>0){
        A.push(tmp.join(''))
    }
    return A.reverse().join(' ')
};
```

