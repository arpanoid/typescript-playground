"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day5 = void 0;
const DataParser_1 = require("../DataParser");
class Day5 {
    constructor() {
        this.getMaxSeatNo = (max, seat) => {
            const seatId = this.processSeat(seat);
            return seatId > max ? seatId : max;
        };
        this.processSeat = (seatNo) => {
            const rows = this.getRows(seatNo);
            const cols = this.getCols(seatNo);
            const rowNumber = this.range(rows.split(""));
            const colNumber = this.range(cols.split(""), 0, 7, 0, 'L', 'R');
            this.list.push(rowNumber * 8 + colNumber);
            return rowNumber * 8 + colNumber;
        };
        // Prase in Rows and Columns
        this.getRows = (seatNo) => {
            return seatNo.slice(0, 7);
        };
        this.getCols = (seatNo) => {
            return seatNo.slice(7);
        };
        // given a range, upper hald and lower half, returns the mid result
        this.range = (ids, min = 0, max = 127, ans = 0, lower = 'F', upper = 'B') => {
            if (ids.length === 1) {
                ans = ids[0] === lower ? min : max;
                return ans;
            }
            const char = ids.shift();
            if (char === lower) {
                max = min + (max - min - 1) / 2;
            }
            else {
                min = max - (max - min - 1) / 2;
            }
            return this.range(ids, min, max, ans, lower, upper);
        };
        this.list = [];
        this.init();
    }
    async init() {
        const result = await DataParser_1.processFile('./src/day5/input.txt');
        const data = result[0].split("\r\n");
        const max = data.reduce(this.getMaxSeatNo, 1);
        const sortedList = this.list.sort((a, b) => a - b);
        const first = sortedList[0];
        for (let i = 1; i < sortedList.length; i++) {
            console.log(`${sortedList[i]} ${sortedList[i + 1]}`);
            if (sortedList[i] < sortedList[i] + 1 && sortedList[i] + 1 < sortedList[i + 1]) {
                console.log(`Missing Seat - ${sortedList[i] + 1}`);
                break;
            }
        }
    }
}
exports.Day5 = Day5;
//# sourceMappingURL=day5.js.map