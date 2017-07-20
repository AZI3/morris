"use strict";

function Node(val) {
    this.value = val;
    this.next = null;
    this.toString = function () {
        var content = [];
        var p = this;
        while (p) {
            content.push(p.value);
            if (p.next == p) break;
            p = p.next
        }
        return content.join()
    }
}

var getJosephKill = function (head, m) {
    if (head == null || head == head.next || m < 1) return head;

    var last = head;
    while (last.next != head) {
        last = last.next
    }

    var cnt = 0;
    while (last != head) {
        if (++cnt == m) {
            last.next = head.next;
            cnt = 0
        } else {
            last = last.next
        }
        head = last.next
    }
    return head
};

var getJosephKill2 = function (head, m) {
    if (head == null || head == head.next || m < 1) return head;

    var cur = head.next;
    var temp = 1;
    while (cur != head) {
        temp++;
        cur = cur.next
    }
    temp = getLive(temp, m);
    while (--temp != 0) {
        head = head.next
    }
    head.next = head;
    return head
};

function getLive(size, m) {
    if (size == 1) {
        return 1
    }
    var result = (getLive(size - 1, m) + m - 1) % size + 1;
    return result
}

export function josephKill() {
    var test1 = function () {
        var head = new Node(1);
        var p = head;
        for (var i = 2; i <= 5; i++) {
            p.next = new Node(i);
            p = p.next
        }
        p.next = head;
        return head
    }();
    var m = 3;
    return getJosephKill2(test1, m)
}
