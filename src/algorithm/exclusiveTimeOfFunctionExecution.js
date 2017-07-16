"use strict";


var exclusiveTime = function (n, logs) {
    var funcStack = [];
    var result = [];
    var prevTime = 0;
    for (var i = 0; i < n; i++) result[i] = 0

    for (var i = 0; i < logs.length; i++) {
        var parts = logs[i].split(":");
        if (parts[1] == 'start') {
            if (funcStack.length > 0) {
                result[funcStack[funcStack.length - 1]] += parseInt(parts[2]) - prevTime
            }
            funcStack.push(parseInt(parts[0]));
            prevTime = parseInt(parts[2])
        } else {
            result[funcStack.pop()] += parseInt(parts[2]) - prevTime + 1;
            prevTime = parseInt(parts[2]) + 1
        }
    }
    return result
};

export function exclusiveTimeOfFunctionExecution() {
    var n = 2;
    var test1 = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
    return exclusiveTime(n, test1)
}
