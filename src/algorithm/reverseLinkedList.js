"use strict";

class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }

    toString() {
        var content = [];
        var p = this;
        while (p) {
            content.push(p.value);
            p = p.next
        }
        return content.join()
    }
}

var getReversedLinkedList = function (head) {
    var pre = null;
    var next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next
    }
    return pre

};

export function reverseLinkedList() {
    var test1 = function () {
        var head = new Node(1);
        var p = head;
        for (var i = 2; i <= 5; i++) {
            p.next = new Node(i);
            p = p.next
        }
        return head
    }();
    return getReversedLinkedList(test1)
}

