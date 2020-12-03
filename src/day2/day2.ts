import { readFile } from 'fs';
import { dir } from 'console';
const readline = require('readline');

class Day2{

    constructor(){
        this.init()
    }

    async init(){
        const data = await this.processData();
        console.log(this.calculateValidPasswords(data));
    }

    calculateValidPasswords(data: string[]) {
        let validPasswords = 0;

        for(let row of data){
            const [ count, letter, password ] = row.split(" ");
            if(this.isValidOccurance(count, letter, password)){
                validPasswords++
            }

        }
        return validPasswords
    }

    isValidOccurance(count: string, dirtyLetter: string, password: string){
        const [ pos1, pos2 ] = count.split('-').map( str => +str )
        const letter = dirtyLetter.substring(0, dirtyLetter.length-1);
        const charAtPos1 = password.charAt(pos1-1);
        const charAtPos2 = password.charAt(pos2-1);
        
        if( charAtPos1 === letter || charAtPos2 === letter ){
            if(charAtPos1 !== charAtPos2){
                return true;
            }
        }
        
        return false; 
    }

    isValidCount(count: string, dirtyLetter: string, password: string) {
        const [ min, max ] = count.split('-').map( str => +str )
        const letter = dirtyLetter.substring(0, dirtyLetter.length-1);
        const letterCount = password.split('').reduce( (prev, current) => {
            if(current === letter){
                prev++;
            }
            return prev;
        }, 0 )
        return letterCount >= min && letterCount <= max;
    }
    
    processData(): Promise<string[]>{
        const promise = new Promise<string[]>( (resolve, reject) => {
            readFile('./src/day2/input.txt', 'utf-8', (err, rawData) => {
                if(err) reject(err)
                
                const data = rawData.split('\n');
                resolve(data);
            })
        })
        
        return promise
    }

}

new Day2();