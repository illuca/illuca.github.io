---
title: 1109. Corporate Flight Bookings
date: 2024-05-03 23:51:08
tags: [leetcode, prefix sum]
---



https://leetcode.cn/problems/corporate-flight-bookings/

```javascript
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let R=new Array(n+1).fill(0)
    for(let booking of bookings){
        let [first,last,seats]=booking
        R[first]+=seats
        if(last+1<R.length){
            //之后累加时，从first到last都会累计+seats的buff，而为了去buff，
            //就需要对last+1上debuff
            R[last+1]-=seats
        }
    }
    for(let i=2;i<n+1;i++){
        R[i]+=R[i-1]
    }
    R.shift()
    return R
};
```

