"use strict";


export function addList() {
    var test1 = function () {
        var head = new Node(9);
        head.next = new Node(3);
        head.next.next = new Node(7);
        return head
    }();
    var test2 = function () {
        var head = new Node(6);
        head.next = new Node(3);
        return head
    }();
    return getAddedList2(test1, test2)
}

var getAddedList = function (head1, head2) {
    var stack1 = new Stack();
    var stack2 = new Stack();
    while (head1) {
        stack1.push(head1.value);
        head1 = head1.next
    }
    while (head2) {
        stack2.push(head2.value);
        head2 = head2.next
    }
    var ca = 0;
    var sum = 0;
    var res = null;
    var pre = null;
    while (stack1.size() > 0 || stack2.size() > 0) {
        sum = (stack1.size() > 0 ? stack1.pop() : 0) + (stack2.size() > 0 ? stack2.pop() : 0) + ca;
        ca = parseInt(sum / 10);
        pre = res;
        res = new Node(sum % 10);
        res.next = pre
    }
    if (ca == 1) {
        pre = res;
        res = new Node(1);
        res.next = pre
    }
    return res
};

var getAddedList2 = function (head1, head2) {
    var rHead1 = reverseList(head1);
    var rHead2 = reverseList(head2);

    var ca = 0;
    var sum = 0;
    var res = null;
    var pre = null;
    while (rHead1 || rHead2) {
        sum = (rHead1 ? rHead1.value : 0) + (rHead2 ? rHead2.value : 0) + ca;
        ca = parseInt(sum / 10);
        pre = res;
        res = new Node(sum % 10);
        res.next = pre;
        rHead1 = rHead1 ? rHead1.next : null;
        rHead2 = rHead2 ? rHead2.next : null
    }
    if (ca == 1) {
        pre = res;
        res = new Node(1);
        res.next = pre
    }
    return res
};

var reverseList = function (head) {
    var next = null;
    var pre = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next
    }
    return pre
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

function Stack() {
    this.values = []
}

Stack.prototype.push = function (val) {
    this.values.push(val)
};
Stack.prototype.pop = function () {
    return this.values.pop()
};
Stack.prototype.peek = function () {
    return this.values[this.size() - 1]
};
Stack.prototype.size = function () {
    return this.values.length
};