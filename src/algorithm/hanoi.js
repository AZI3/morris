"use strict";

var hanoi = function (nums, origin, aux, dest, log) {
    var moves = [];
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