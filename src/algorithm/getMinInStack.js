"use strict";

class Stack {
    constructor() {
        this.items = [];
        this.minStack = []
    }

    push(el) {
        this.items.push(el);

        if (this.minStack.length === 0) {
            this.minStack.push(el)
        } else if (el <= this.getMin()) {
            this.minStack.push(el)
        }
    }

    /*    push(el) {
     this.items.push(el);

     if (this.minStack.length === 0) {
     this.minStack.push(el)
     } else if (el <= this.getMin()) {
     this.minStack.push(el)
     } else if(el > this.getMin()) {
     this.minStack.push(this.minStack.peek())
     }
     }*/

    pop() {
        if (this.isEmpty()) return null;
        let val = this.items.pop();
        if (val === this.getMin()) {
            this.minStack.pop();
        }
        return val
    }

    /*    pop2() {
     if (this.isEmpty()) return null;
     let val = this.items.pop();
     this.minStack.pop();
     return val
     }*/

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1]
    }

    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1]
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0
    }

}

var test1 = [4, 5, 2, 0, 1, 3];

var stackMin = function (dataArray) {
    var stack = new Stack();
    for (var i = 0; i < stackMin.length; i++) {
        stack.push(dataArray[i])
    }
    return stack.getMin();
};

export function getMinInStack() {
    return stackMin(test1)
}