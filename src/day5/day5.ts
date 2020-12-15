import { processFile } from "../DataParser";

export class Day5{

    private list: number[];
    
    constructor(){
        this.list = [];
        this.init();
    }

    async init() {
        const result = await processFile('./src/day5/input.txt');
        const data = result[0].split("\r\n");
        const max = data.reduce(  this.getMaxSeatNo, 1 )
        const sortedList = this.list.sort( (a,b) => a - b );
        const first = sortedList[0];

        for(let i=1; i<sortedList.length; i++){
            console.log(`${sortedList[i] } ${sortedList[i+1]}`)
            if( sortedList[i] < sortedList[i] + 1 && sortedList[i] + 1 < sortedList[i+1]){
                console.log(`Missing Seat - ${sortedList[i] + 1 }`);
                break;
            }
        }
    }

    private getMaxSeatNo = (max: number, seat: string) => {
        const seatId = this.processSeat(seat);
        return seatId > max ? seatId : max;    
    }

    private processSeat = (seatNo: string) => {
        const rows = this.getRows(seatNo);
        const cols = this.getCols(seatNo);
        const rowNumber = this.range(rows.split(""));
        const colNumber = this.range(cols.split(""), 0, 7, 0, 'L', 'R')
        this.list.push(rowNumber * 8 + colNumber)
        return rowNumber * 8 + colNumber;
    }

    // Prase in Rows and Columns
    private getRows = (seatNo: string) => {
        return seatNo.slice(0,7)
    }

    private getCols = (seatNo: string) => {
        return seatNo.slice(7);
    }

    // given a range, upper hald and lower half, returns the mid result

    range = (ids: string[], min = 0, max= 127, ans = 0, lower = 'F', upper = 'B'): number => {
        if(ids.length === 1){
            ans = ids[0] === lower ? min : max;
            return ans;
        }

        const char = ids.shift();
        if(char === lower){
            max = min + (max - min - 1) / 2
        }else{
            min = max - (max - min - 1) / 2
        }

        return this.range(ids, min, max, ans, lower, upper )
    }

    //combine row/column and return unique id

    //get Max
}