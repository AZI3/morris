"use strict";

import {getMinInStack} from "./algorithm/getMinInStack.js";
import {maxDistanceInArrays} from "./algorithm/maxDistanceInArrays.js";
import {twoStacksQueue} from "./algorithm/twoStacksQueue.js"
import {getReversedStack} from "./algorithm/reversedStack.js"
import {dequeueCatsAndDogsQueue} from "./algorithm/catsAndDogsQueue.js"
import {sortStackByStack} from "./algorithm/sortStackByStack.js"
import {testHanoi, testHanoi2, testHanoi3} from "./algorithm/hanoi.js"
import {getLargestInWindowOnArray} from "./algorithm/getLargestInWindowOnArray.js"


EvaluateTimeCost(getLargestInWindowOnArray);

function EvaluateTimeCost(func) {
    let startTime = new Date();

    for (var i = 0; i < 10000; i++) {
        func()
    }
    let result = func();

    let endTime = new Date();
    let timerEl = document.getElementById('timer');
    timerEl.innerHTML = (endTime.getTime() - startTime.getTime()) / 10001;
    let resultEl = document.getElementById('result');
    resultEl.innerHTML = result
}

