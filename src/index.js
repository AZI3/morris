"use strict";

import {Stack} from "./algorithm/stack.js";

function EvaluateTimeCost(func) {
    var startTime = new Date();
    func();
    var endTime = new Date();
    var el = document.getElementById('timer');
    el.innerHTML = endTime.getTime() - startTime.getTime()
}

function stackGetMin() {
    var stack = new Stack();

    stack.push("1");
    stack.push("2");
    stack.pop()
}

EvaluateTimeCost(stackGetMin);