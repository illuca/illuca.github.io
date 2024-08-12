---
title: Promise
date: 2024-05-13 23:56:44
tags: [前端]
---



## 当我们使用axios时发生了什么？

```js
axios.get()
.then((data)=>{conolse.log(data)})
.catch((error)=>{console.log(error)})
```

axios会生成一个promise对象，对象状态为pending。

如果后端返回成功，则promise调用promise内置的resolve方法将状态改为fullfilled，并且value被传递给then中的方法，then方法中的回调函数被添加到微任务队列。假设我们只执行这一行，则微任务队列为空，立即执行then中的方法。

如果后端返回失败，则promise调用promise内置的reject方法将状态改为rejected，并且 reason（拒绝的原因）会被传递给紧随其后的 .catch() 方法的回调函数，catch方法中的回调函数被添加到微任务队列，假设我们只执行这一行，则微任务队列为空，立即执行catch中的方法。

## 手写promise.all

```js

Promise.all2 = (promises) => {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve()
            return
        }
        if (promises.length !== 0) {
            let counter = 0
            let results = new Array(promises.length)
            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i])
                    .then((value) => {
                        counter += 1
                        results[i] = value
                        if (counter == promises.length) {
                            resolve(results)
                        }
                    })
                    .catch(() => {
                        reject('出错了')
                    })
            }
        }

    })
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo')
    }, 100);
});

Promise.all2([promise1, promise2, promise3]).then(values => {
    console.log(values); // 预期输出: [3, 42, "foo"]
}).catch(error => {
    console.error(error);
});
```

## 手写promise

在实现之前，时刻铭记：If we do not want execute immediately, we need to put it into a function and call it when desired.

并且我们需要知道正常的promise具备了哪些功能，一般来说，常用的promise使用为：

```JS
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(res);
    }, 1000);
});

promise.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
promise.catch((err) => {
    console.log(err);
});
promise.finally(() => {
    console.log("finally over");
});
```

所以我们要实现：

* 对Promise传入callback
* 当resolved时，执行then中的callback
* 当rejected时，执行catch中的callback
* 不管resolved还是rejected，都执行finally中的callback

首先先实现then

```JS
const FULFILLED = 'fulfilled'
const PENDING = 'pending'
const REJECTED = 'rejected'


function MyPromise(handler) {
    this.status = PENDING
    this.value = undefined
    this.onFulFilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (val) => {
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = val
            this.onFulFilledCallbacks.forEach(f => f(val))
        }
    }

    const reject = (err) => {
        if (this.status === PENDING) {
            this.status = REJECTED
            this.value = err
            this.onRejectedCallbacks.forEach(f => f(err))
        }
    }

    try {
        handler(resolve, reject)
    } catch (error) {
        reject(error)
    }
}


MyPromise.prototype.then = function (onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
        onFulfilled(this.value)
    } else if (this.status === REJECTED) {
        onRejected(this.value)
    } else {
        // pending
        this.onFulFilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
    }
}

const p1 = new MyPromise((resolve, reject) => {
    setTimeout((v) => {
        resolve(v)
    }, 1000, 'ok')
})

const p2 = new MyPromise((resolve, reject) => {
    setTimeout((v) => {
        resolve(v)
    }, 1000, 'fail')
})


p1.then(v => {
    console.log(v)
}, err => {
    console.log(err)
})

p2.then(v => {
    console.log(v)
}, err => {
    console.log(err)
})
```

当我们在执行p1.then()时，p1仍处于pending状态，所以两个回调分别加入成功队列和失败队列。

等待1s后，p1状态变为fulfilled，并开始执行成功队列的方法。



我们实现了then，但是这个then是没有返回值的，所以也不支持链式调用。链式调用可以让代码更清晰，所以很有必要支持，支持链式调用就需要返回一个新的promise，实现如下：

