"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day3 = void 0;
const fs_1 = require("fs");
class Day3 {
    constructor() {
        this.one = (input, xUnits, yUnits) => {
            const rows = input.split('\r\n').filter((row) => row.match(/[\#\.]/g));
            var count = 0;
            var y = 0;
            var x = 0;
            const lastRowIndex = rows[0].length - 1;
            // Console will return number of trees
            while (y < rows.length - 1) {
                // As we approach end of string, make sure we return to 
                // beginning of next string at correct index
                if ((lastRowIndex - x) < 3) {
                    x = x - lastRowIndex - 1;
                }
                x = x + 3;
                y = y + 1;
                if (rows[y][x] === "#") {
                    count = count + 1;
                }
            }
            return count;
        };
        this.data = this.processData();
        const file = fs_1.readFileSync('./src/day3/input.txt', 'utf-8');
        const ans = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]].reduce((prev, current) => {
            const [x, y] = current;
            const result = this.travel(this.data, x, y);
            return result * prev;
        }, 1);
        console.log(ans);
    }
    travel(data, x, y) {
        let count = 0;
        let column = x;
        for (let row = y; row < data.length; row = row + y) {
            // 2 - pick next row
            console.log(`${column} | ${row}`);
            const lines = data[row];
            const slope = lines.split("");
            // if x > length, wrap it
            if (column >= slope.length) {
                column = column - slope.length;
            }
            //3. move down
            let location = slope[column];
            //4. Check if it is a tree
            if (location === '#' || location === 'X') {
                //5. Increase the count
                count++;
            }
            column += x;
        }
        return count;
    }
    // 1 - Process the incoming data
    processData() {
        return fs_1.readFileSync('./src/day3/input.txt', 'utf-8').split('\r\n');
    }
}
exports.Day3 = Day3;
//# sourceMappingURL=day3.js.map