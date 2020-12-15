"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const readline = require('readline');
class Day2 {
    constructor() {
        this.init();
    }
    async init() {
        const data = await this.processData();
        console.log(this.calculateValidPasswords(data));
    }
    calculateValidPasswords(data) {
        let validPasswords = 0;
        for (let row of data) {
            const [count, letter, password] = row.split(" ");
            if (this.isValidOccurance(count, letter, password)) {
                validPasswords++;
            }
        }
        return validPasswords;
    }
    isValidOccurance(count, dirtyLetter, password) {
        const [pos1, pos2] = count.split('-').map(str => +str);
        const letter = dirtyLetter.substring(0, dirtyLetter.length - 1);
        const charAtPos1 = password.charAt(pos1 - 1);
        const charAtPos2 = password.charAt(pos2 - 1);
        if (charAtPos1 === letter || charAtPos2 === letter) {
            if (charAtPos1 !== charAtPos2) {
                return true;
            }
        }
        return false;
    }
    isValidCount(count, dirtyLetter, password) {
        const [min, max] = count.split('-').map(str => +str);
        const letter = dirtyLetter.substring(0, dirtyLetter.length - 1);
        const letterCount = password.split('').reduce((prev, current) => {
            if (current === letter) {
                prev++;
            }
            return prev;
        }, 0);
        return letterCount >= min && letterCount <= max;
    }
    processData() {
        const promise = new Promise((resolve, reject) => {
            fs_1.readFile('./src/day2/input.txt', 'utf-8', (err, rawData) => {
                if (err)
                    reject(err);
                const data = rawData.split('\n');
                resolve(data);
            });
        });
        return promise;
    }
}
new Day2();
//# sourceMappingURL=day2.js.map