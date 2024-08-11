---
title: ANZAC CONTEST 4
date: 2023-05-28 19:51:29
tags: [algorithm]
---



# A

Note:

You cannot focus on who wins the game. You should just follow the description in the problem "X is the score of the player who serves".

So 1-0 is Bob serve. Then Bob's score is 1.

```
Exp1:
2
0-0
1-0
```

And Exp2 is valid.

```
Exp2:
3
0-0
1-10
1-11
```





```c++
#include <iostream>
using namespace std;
int main() {
    int n;
    scanf("%d", &n);
    int currRound = 0;
    int prevAlice = 0, prevBob = 0;
    for (int i = 1; i <= n; i++) {
        int alice, bob;
        scanf("%d-%d", &alice, &bob);
        currRound = alice + bob;
        if (currRound % 4 == 1 || currRound % 4 == 2) {
            swap(alice, bob);
        }
        //their score must in [0,11]
        if (!(alice >= 0 && alice <= 11 && bob >= 0 && bob <= 11)) {
            cout << "error " << i;
            exit(0);
        }
        //during the game, alice must >= prev alice and bob must >= prev bob
        if (!(alice >= prevAlice && bob >= prevBob)) {
            cout << "error " << i;
            exit(0);
        }
        //when game is over, their scores cannot be changed
        if ((prevBob == 11 || prevAlice == 11) && !(bob == prevBob && alice == prevAlice)
            // special condition check
            || alice == 11 && bob == 11) {
            cout << "error " << i;
            exit(0);
        }
        //set prev as curr
        prevBob = bob;
        prevAlice = alice;
    }
    cout << "ok";
    return 0;
}
```

