"use strict";

class DNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null
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

var getRemovedLastKthNodeList = function (head, k) {
    if (head == null || k < 1) return head;
    var slow = head, fast = head;
    for (var i = 0; i < k; i++) {
        if (fast.next == null) return head;
        fast = fast.next
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next
    }
    slow.next.next.prev = slow;
    slow.next = slow.next.next;
    return head
};

export function removeLastKthNodeFromDNodeList() {
    var test1 = function () {
        var head = new DNode(1);
        var p = head;
        for (var i = 2; i <= 5; i++) {
            p.next = new DNode(i);
            p.next.prev = p;
            p = p.next
        }
        return head
    }();
    var k = 2;
    return getRemovedLastKthNodeList(test1, k)
}
