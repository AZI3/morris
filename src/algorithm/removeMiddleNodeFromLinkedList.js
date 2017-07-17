"use strict";

class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }

    toString() {
        var content = [];
        var p = this.next;
        while (p) {
            content.push(p.value);
            p = p.next
        }
        return content.join()
    }
}

var getRemovedMiddleNodeList = function (head) {
    if (head == null || head.next == null) return head;

    if (head.next.next == null) return head.next;

    var pre = head.next; // first node
    var cur = head.next.next.next; // third node
    while (cur.next != null && cur.next.next != null) {
        pre = pre.next; // moves one step
        cur = cur.next.next // moves two steps
    }
    pre.next = pre.next.next; // skip the middle node
    return head

};

export function removeMiddleNodeFromLinkedList() {
    var test1 = function () {
        var head = new Node(null);
        var p = head;
        for (var i = 1; i <= 5; i++) {
            p.next = new Node(i);
            p = p.next
        }
        return head
    }();

    return getRemovedMiddleNodeList(test1)
}
