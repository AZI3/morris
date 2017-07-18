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

var getReversedDNodeList = function (head) {
    if (head == null) return head;
    var pre = null;
    var next = null;
    while (head) {
        var next = head.next;
        head.next = pre;
        pre = head;
        head = next
    }
    return pre
};

export function reverseDNodeList() {
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

    return getReversedDNodeList(test1)
}