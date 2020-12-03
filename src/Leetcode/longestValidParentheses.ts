function longestValidParentheses(s: string): number {
    if(s.length === 0) return 0
    
    let array = s.split('');
    let max = 0;

    for(let i=0; i< array.length; i++){
        const subArr = array.slice(i);
        const totalValidParan = validParentheses(subArr);
        max = max < totalValidParan ?  totalValidParan : max;   
    }

    return max * 2

    function validParentheses(arr: string[]): number{
        let count = 0;
        let max = 0;
        let totalValid = 0;

        for(let paran of arr){
            if(paran === ')' && count === 0){
                return totalValid;
            }else if(paran === '('){
                count++
                max++;
            }else{
                count--;
                if(count === 0){
                    totalValid += max;
                    max = 0;
                }
            }
        }
        return totalValid
    }
};



// console.log(longestValidParentheses("()()()()(()()"))
// console.log(longestValidParentheses("(()"))
console.log(longestValidParentheses(")()())"))