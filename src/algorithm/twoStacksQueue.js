"use strict";

class TwoStacksQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = []
    }

    add(el) {
        this.pushStack.push(el)
    }

    poll() {
        if (this.pushStack.length && this.popStack.length) {
            return null
        }
        while (this.pushStack.length) {
            this.popStack.push(this.pushStack.pop())
        }
        return this.popStack.pop()
    }

    peek() {
        if (this.pushStack.length && this.popStack.length) {
            return null
        }
        while (!this.pushStack.length) {
            this.popStack.push(this.pushStack.pop())
        }
        return this.popStack.peek()
    }

    size() {
        return this.pushStack.length
    }
}


let test1 = [1, 2, 3, 4, 5];

function tryQueue(dataArray) {
    var queue = new TwoStacksQueue();
    for (var i = 0; i < dataArray.length; i++) {
        queue.add(dataArray[i])
    }
    var result = [];
    for (var j = 0; j < dataArray.length; j++) {
        result.push(queue.poll())
    }
    return result
}

export function twoStacksQueue() {
    return tryQueue(test1)
}
