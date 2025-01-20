//Using the rest operator 
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
        
    }, 0)
}
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));

//using the spread operator
const defaultColors = ["red", "green"];

const userFavouriteColor = ["orange", "yellow"];

const fallColors = ["fall red", "fall orange"];

const newArray = ["pink", "indego", ...defaultColors, ...userFavouriteColor, ...fallColors];

console.log(newArray);

//mix of rest and spread operator
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ["milk", ...items];
    }
    return items;

} 
console.log(validateShoppingList("orange", "beans", "eggs"));


