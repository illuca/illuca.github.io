---
title: 2013. Detect Squares
date: 2023-05-18
tags: leetcode
---



**Note:**

Pay attention to array bound. You'd better plus 1 to array size.

In this problem, 0<=x,y<=1000. So I should init array size as 1000+1;

```C++
#include<map>
#include <cstdlib>
#include <vector>

using namespace std;

class DetectSquares {
public:
    map<int, vector<pair<int,int>>> mapY;
    int counter[1001][1001]={};

    void add(vector<int> point) {
        int pointx=point[0];
        int pointy=point[1];
        if(counter[pointx][pointy] == 0){
            //only insert once
            mapY[pointy].emplace_back(pointx, pointy);
        }
        counter[pointx][pointy]++;
    }

    int count(vector<int> query) {
        int queryx=query[0], queryy=query[1];
        vector<pair<int,int>> arrY=mapY[query[1]];
        int res=0;
        //arry does not have duplicate items
        for(int i = 0; i<arrY.size(); i++){
            pair<int,int> p = arrY[i];
            int px=p.first,py=p.second;
            int edge=abs(queryx-px);
            if(edge==0) {
                continue;
            }
            int y=queryy+edge;
            int _y=queryy-edge;
            if (y>=0 && y<=1000 ) {
                //up=[queryx,y]
                //upDia=[px,y]
                res+= counter[px][py] * counter[queryx][y] * counter[px][y];
            }
            if (_y>=0 && _y<=1000) {
                //down=[queryx,_y]
                //downDia=[px,_y]   
                res+= counter[px][py] * counter[queryx][_y] * counter[px][_y];
            }
        }
        return res;
    }
};
```



I think it can be more clear because diagonal point is more special than point with the same x as query. And if we get the diagonal point, it is easier to express two other points.

```C++
#include <cstdlib>
#include <vector>

using namespace std;

class DetectSquares {
public:
    vector<pair<int,int>> points;
    int counter[1001][1001]={};

    void add(vector<int> point) {
        int pointX=point[0];
        int pointY=point[1];
        if(counter[pointX][pointY] == 0){
            //only insert once
            points.emplace_back(pointX, pointY);
        }
        counter[pointX][pointY]++;
    }

    int count(vector<int> query) {
        int queryX=query[0], queryY=query[1];
        int res=0;
        for(auto &[diagX, diagY]: points){
            if(abs(diagX-queryX)!=abs(diagY-queryY) || diagX-queryX==0) {
                continue;
            }else{
                //m has the same x as diag and same y as query
                //m(diagX, queryY)
                //n(queryX, diagY)
                res+=counter[diagX][queryY]*counter[queryX][diagY]*counter[diagX][diagY];
            }
        }
        return res;
    }
};
```

