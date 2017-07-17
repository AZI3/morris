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

var getRemovedNodelist = function (head, a, b) {
    if (head == null || a == 0 || b == 0 || a > b) return head;
    var cnt = 0;
    var p = head;
    while (p) {
        cnt++;
        p = p.next
    }
    var idx = Math.ceil(a * cnt / b);

    p = head;
    while (--idx > 1) {
        p = p.next
    }
    p.next = p.next.next;
    return head
};

export function removeNodeAtAOverBFromLinkedList() {
    var test1 = function () {
        var head = new Node(1);
        var p = head;
        for (var i = 2; i <= 5; i++) {
            p.next = new Node(i);
            p = p.next
        }
        return head
    }();
    var a = 2, b = 5;
    return getRemovedNodelist(test1, a, b)
}