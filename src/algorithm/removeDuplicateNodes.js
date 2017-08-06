"use strict";

export function removeDuplicateNodes() {
    var test1 = function () {
        var head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(3);
        head.next.next.next.next = new Node(4);
        return head
    }();

    return getRemoveDuplicateNodes2(test1)
}

var getRemoveDuplicateNodes = function (head) {
    if (head == null || head.next == null) return head;
    var set = [];
    var pre = head;
    var cur = head.next;
    set.push(head.value);
    while (cur) {
        if (set.indexOf(cur.value) >= 0) {
            pre.next = cur.next
        } else {
            set.push(cur.value);
            pre = cur
        }
        cur = cur.next
    }
    return head
};

var getRemoveDuplicateNodes2 = function (head) {
    if (head == null || head.next == null) return head;
    var pre = null;
    var cur = head;
    var next = null;
    while (cur) {
        pre = cur;
        next = cur.next;
        while (next) {
            if (cur.value == next.value) {
                pre.next = next.next
            } else {
                pre = next
            }
            next = next.next
        }
        cur = cur.next
    }
    return head
};

function Node(val) {
    this.value = val;
    this.next = null;
    this.toString = function () {
        var result = [];
        var p = this;
        while (p) {
            result.push(p.value);
            p = p.next
        }
        return result.join()
    }
}