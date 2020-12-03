import { readFile } from 'fs';
import { resolve } from 'dns';

export class Day1 {

    constructor(){
        const frequencyMap = new Map<number, number>();
        readFile( './src/day1/input.txt', 'utf-8', this.processData.bind(this))
    }

    processData(err: NodeJS.ErrnoException | null, rawData: string){
        if(err) throw err;

        const data = rawData.split('\r\n').map( str => +str );
        for(let i=0; i<data.length; i++){
            const number = data[i];
            const pair = this.getMatchingPair(data.slice(i), 2020-number)
            if(pair !== null){
                const answer = [...pair, number].reduce( (prev, current) => prev * current, 1 );
                console.log(answer);
            }
        }
    }

    getMatchingPair = (nums: number[], target: number): number[] | null => {
        const frequencyMap = new Map<number, number>();

        for(let number of nums){
            const currentNumber = frequencyMap.get(number)
            if(currentNumber){
                return [number, currentNumber]
            }else{
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
    }
}

