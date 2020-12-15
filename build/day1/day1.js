"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day1 = void 0;
const fs_1 = require("fs");
class Day1 {
    constructor() {
        this.getMatchingPair = (nums, target) => {
            const frequencyMap = new Map();
            for (let number of nums) {
                const currentNumber = frequencyMap.get(number);
                if (currentNumber) {
                    return [number, currentNumber];
                }
                else {
                    const key = target - number;
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
        const frequencyMap = new Map();
        fs_1.readFile('./src/day1/input.txt', 'utf-8', this.processData.bind(this));
    }
    processData(err, rawData) {
        if (err)
            throw err;
        const data = rawData.split('\r\n').map(str => +str);
        for (let i = 0; i < data.length; i++) {
            const number = data[i];
            const pair = this.getMatchingPair(data.slice(i), 2020 - number);
            if (pair !== null) {
                const answer = [...pair, number].reduce((prev, current) => prev * current, 1);
                console.log(answer);
            }
        }
    }
}
exports.Day1 = Day1;
//# sourceMappingURL=day1.js.map