"use strict";
function longestValidParentheses(s) {
    if (s.length === 0)
        return 0;
    var array = s.split('');
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        var subArr = array.slice(i);
        var totalValidParan = validParentheses(subArr);
        max = max < totalValidParan ? totalValidParan : max;
    }
    return max * 2;
    function validParentheses(arr) {
        var count = 0;
        var max = 0;
        var totalValid = 0;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var paran = arr_1[_i];
            if (paran === ')' && count === 0) {
                return totalValid;
            }
            else if (paran === '(') {
                count++;
                max++;
            }
            else {
                count--;
                if (count === 0) {
                    totalValid += max;
                    max = 0;
                }
            }
        }
        return totalValid;
    }
}
;
// console.log(longestValidParentheses("()()()()(()()"))
// console.log(longestValidParentheses("(()"))
console.log(longestValidParentheses(")()())"));
//# sourceMappingURL=longestValidParentheses.js.map