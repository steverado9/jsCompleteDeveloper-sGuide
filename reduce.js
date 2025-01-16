//Example 1
//sum all the numbers in the array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Traditional for loop
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

//Using the reduce helper
const result = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0)
console.log("reduce", result);

