"use strict";

export class Stack {
    constructor() {
        this.items = []
    }

    push(el) {
        this.items.push(el)
    }

    pop() {
        this.items.pop()
    }

}