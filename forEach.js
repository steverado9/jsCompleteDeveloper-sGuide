//Example one, loop through the array of colors
const colors = ['red', 'blue', 'green'];

colors.forEach(function (color) {
    console.log(color);
})

// Example two
//1) create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];
//2) create a variable to hold the sum
let sum = 0;
//create a functon
function adder(number) {
    sum += number;
}
//3) loop over the array, incrementing the sum variable
numbers.forEach(adder)
//4) print the sum variable
console.log(sum);


