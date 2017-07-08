"use strict";

var hanoi = function (nums, origin, aux, dest, log) {
    if (nums == 1) {
        log.push("Move disk 1 from " + origin + " to " + dest);
        return
    }
    hanoi(nums - 1, origin, dest, aux, log);
    log.push("Move disk " + nums + " from " + origin + " to " + dest);
    hanoi(nums - 1, aux, origin, dest, log);
    return log
};

var test1 = 3;
var test2 = 5;

export function testHanoi() {
    return hanoi(test1, "A", "B", "C", [])
}

var hanoi2 = function (nums, origin, aux, dest, log) { // mid peg must be used
    if (nums == 1) {
        log.push("Move disk 1 from " + origin + " to " + aux);
        log.push("Move disk 1 from " + aux + " to " + dest);
        return log
    }
    hanoi2(nums - 1, origin, aux, dest, log);
    log.push("Move disk " + nums + " from " + origin + " to " + aux);
    hanoi2(nums - 1, dest, aux, origin, log);
    log.push("Move disk " + nums + " from " + aux + " to " + dest);
    hanoi2(nums - 1, origin, aux, dest, log);
    return log
};

export function testHanoi2() {
    return hanoi2(test1, "A", "B", "C", [])
}

class Stack {
    constructor() {
        this.items = []
    }

    push(el) {
        this.items.push(el)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    toString() {
        return this.items.toString()
    }

}

var ACTION = {
    NO: 0,
    L2M: 1,
    M2L: 2,
    R2M: 3,
    M2R: 4
};

var hanoi3 = function (nums, origin, aux, dest, log) {
    var originStack = new Stack();
    originStack.tag = origin;
    originStack.push(Number.MAX_VALUE);
    var auxStack = new Stack();
    auxStack.tag = aux;
    auxStack.push(Number.MAX_VALUE);
    var destStack = new Stack();
    destStack.tag = dest;
    destStack.push(Number.MAX_VALUE);

    // initialize origin stack
    for (var i = nums; i > 0; i--) {
        originStack.push(i)
    }

    var lastMove = ACTION.NO;
    while (destStack.size() != nums) {
        moveStack(ACTION.M2L, ACTION.L2M, originStack, auxStack);
        moveStack(ACTION.M2R, ACTION.R2M, destStack, auxStack);
        moveStack(ACTION.L2M, ACTION.M2L, auxStack, originStack);
        moveStack(ACTION.R2M, ACTION.M2R, auxStack, destStack)
    }
    return log;

    function moveStack(forbid, next, from, to) {
        if (lastMove != forbid && from.peek() < to.peek()) {
            var val = from.pop();
            to.push(val);
            log.push("Move disk " + val + " from " + from.tag + " to " + to.tag);
            lastMove = next
        }
    }

};


export function testHanoi3() {
    return hanoi3(test1, "A", "B", "C", [])
}