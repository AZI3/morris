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