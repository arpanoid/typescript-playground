"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day1 = void 0;
var fs_1 = require("fs");
var Day1 = /** @class */ (function () {
    function Day1() {
        this.getMatchingPair = function (nums, target) {
            var frequencyMap = new Map();
            for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
                var number = nums_1[_i];
                var currentNumber = frequencyMap.get(number);
                if (currentNumber) {
                    return [number, currentNumber];
                }
                else {
                    var key = target - number;
                    frequencyMap.set(key, number);
                }
            }
            // nums.forEach( value => {
            //     if(frequencyMap.has(number)){
            //         return [number, frequencyMap.get(number)]
            //     }else{
            //         const key = target - number;
            //         frequencyMap.set(key, number);
            //     }
            // })
            return null;
        };
        var frequencyMap = new Map();
        fs_1.readFile('./src/day1/input.txt', 'utf-8', this.processData.bind(this));
    }
    Day1.prototype.processData = function (err, rawData) {
        if (err)
            throw err;
        var data = rawData.split('\r\n').map(function (str) { return +str; });
        for (var i = 0; i < data.length; i++) {
            var number = data[i];
            var pair = this.getMatchingPair(data.slice(i), 2020 - number);
            if (pair !== null) {
                var answer = __spreadArrays(pair, [number]).reduce(function (prev, current) { return prev * current; }, 1);
                console.log(answer);
            }
        }
    };
    return Day1;
}());
exports.Day1 = Day1;
//# sourceMappingURL=day1.js.map