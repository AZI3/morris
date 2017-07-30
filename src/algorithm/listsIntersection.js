"use strict";

export function listsIntersection() {
    var n1 = new Node(1);
    var n2 = new Node(2);
    var n3 = new Node(3);
    var n4 = new Node(4);
    var n5 = new Node(5);
    var n6 = new Node(6);
    var n7 = new Node(7);
    var test1 = function () {
        var head = n1;
        head.next = n2;
        head.next.next = n3;
        head.next.next.next = n4;
        head.next.next.next.next = n5;
        head.next.next.next.next.next = n3;
        return head
    }();
    var test2 = function () {
        var head = n6;
        head.next = n7;
        head.next.next = n4;
        return head
    }();
    return getIntersection(test1, test2)
}

var getIntersection = function (head1, head2) {
    if (head1 == null || head2 == null) return null;

    var loop1 = getLoopNode(head1);
    var loop2 = getLoopNode(head2);
    if (loop1 == null && loop2 == null) return noLoop(head1, head2);
    if (loop1 != null && loop2 != null) return bothLoop(head1, head2, loop1, loop2);
    return null
};

var getLoopNode = function (head) {
    if (head.next == null || head.next.next == null) return null;
    var slow = head.next, fast = head.next.next;
    while (slow != fast) {
        if (fast.next == null || fast.next.next == null) return null;
        slow = slow.next;
        fast = fast.next.next
    }
    fast = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next
    }
    return slow
};

var noLoop = function (head1, head2) {
    var cur1 = head1;
    var cur2 = head2;
    var n = 0;
    while (cur1) {
        n++;
        cur1 = cur1.next
    }
    while (cur2) {
        n--;
        cur2 = cur2.next
    }
    if (cur1 != cur2) return null;
    cur1 = (n > 0 ? head1 : head2);
    cur2 = (cur1 == head1 ? head2 : head1);
    n = Math.abs(n);
    while (n > 0) {
        n--;
        cur1 = cur1.next
    }
    while (cur1 != cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next
    }
    return cur1
};

var bothLoop = function (head1, head2, loop1, loop2) {
    var cur1 = head1;
    var cur2 = head2;
    var n = 0;
    if (loop1 == loop2) {
        while (cur1 != loop1) {
            n++;
            cur1 = cur1.next
        }
        while (cur2 != loop2) {
            n--;
            cur2 = cur2.next
        }
        cur1 = (n > 0 ? head1 : head2);
        cur2 = (cur1 == head1 ? head2 : head1);
        n = Math.abs(n);
        while (n > 0) {
            n--;
            cur1 = cur1.next
        }
        while (cur1 != cur2) {
            cur1 = cur1.next;
            cur2 = cur2.next
        }
        return cur1
    } else {
        cur1 = loop1.next;
        while (cur1 != loop1) {
            if (cur1 == loop2) return loop2;
            cur1 = cur1.next
        }
        return null
    }
};

function Node(val) {
    this.value = val;
    this.next = null;
    this.toString = function () {
        return this.value
    }
}