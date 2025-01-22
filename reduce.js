//Example 1
//sum all the numbers in the array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0)
console.log("reduce", result);

//Example 2
//Get the colors
let primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'},
]

const showColors = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
},[])
console.log(showColors);

//Example 3
//check if the parenthesis are balanced

function balancedParens(string) {
    return !string.split('').reduce(function(previous, char) { //the !(not equal) sign converts it to boolean
        if (char < 0) {return false}
        if (char === '(') { ++previous }
        if (char === ')') { --previous }
        return previous;
    }, 0)
}
const solution = balancedParens("))");
console.log(solution);



