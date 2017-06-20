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

    pop() {
        if (this.isEmpty()) return null;
        let val = this.items.pop();
        if (val === this.getMin()) {
            this.minStack.pop();
        }
        return val
    }

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
export function getMinInStack() {
    var stack = new Stack();

    stack.push(4);
    stack.push(5);
    stack.push(2);
    stack.push(0);
    stack.push(1);
    stack.push(3);

    return stack.getMin();
}