//Traditional for loop
const numbers = [1, 2, 3, 4, 5];
let doubledNumber = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumber.push(numbers[i] * 2);
}
console.log(doubledNumber);

//map helper
//Example 1
const double = numbers.map(function(number) {
    return number * 2;
})
console.log(double);

//Example 2
const cars = [
    {model: 'Buick', price: 'cheap'},
    {model: 'camaro', price: 'Expensive'}
];

const prices = cars.map(function(car) {
    return car.price;
})

console.log(prices);







