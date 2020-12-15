import { processFile } from "../DataParser";

export class Day4{
    
    private fields = new Set(['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']);

    private fieldsRules: {[ key: string]: (value: string) => boolean} = {
        'byr': (value: string) => value.length === 4 && +value >=1920 && +value <= 2002,
        'iyr': (value: string) => value.length === 4 && +value >=2010 && +value <= 2020,
        'eyr': (value: string) => value.length === 4 && +value >=2020 && +value <= 2030,
        'hgt': (value: string) => {
            const unit = value.slice(value.length - 2);
            if(unit === 'in' || unit === 'cm'){
                const height = value.slice(0, value.length - 2);
                if(+height){
                    if( (unit === 'cm' && +height >=150 && +height <=193) || (unit === 'in' && +height >=59 && +height <=76) ){
                        return true;
                    }
                }
            }
            
            return false;
        },
        'hcl': (value: string) => {
            const firstLetter = value.slice(0,1);
            if(firstLetter !== '#') return false ;
            const color = value.slice(1);
            var letters = /^[0-9a-fA-F]+$/;
            if(color.length === 6 && color.match(letters) ){
                return true
            }     
            return false;
        },
        'ecl': (value: string) => {
            return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)
        },
        'pid': (value:string) => {
            if(value.length === 9){
                return true;
            }else if(value.length > 9){
                const firstIndex = value.split("").findIndex( predicate => +predicate !== 0 );
                return value.slice(firstIndex).length === 9
            }
            return false;
        },
        'cid': (value: string) => true
    }
    
    constructor(){
        this.init()
    }

    private async init() {
        const result = await processFile('./src/day4/input.txt');
        const data = result[0].split("\r\n");
        this.validate(data);
        
    }

    private isValidEntry(key: string, val: string){
        if(key === 'cid') return true;
        if(this.fields.has(key)){
            const isValid = this.fieldsRules[key](val); 
            return isValid;
        }
        return false; 
    }

    private validate(data: string[]){
        let validPassports = 0;
        let requiredFields = new Set(this.fields);

        data.forEach( (line: string) => {
            if(line === ''){
                if(requiredFields.size === 0){
                    validPassports++;
                }
                requiredFields = new Set(this.fields);
            } else{
                const keyVals = line.split(" ");
                keyVals.forEach( pair => {
                    const [key, val] = pair.split(":");
                    if(this.isValidEntry(key, val)){
                        requiredFields.delete(key);
                    }
                })
            }   

        })
        
        return validPassports;
    }
}