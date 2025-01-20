//Example 1
const expense = {
    type: "Business",
    amount: "$45 USD"
}

const {type, amount} = expense;
console.log(type);
console.log(amount);


//Example 2 Destructuring function object
const savedFIle = {
    extension: 'jpg',
    name: 'repost',
    size: 1404
}

function fileSummary({extension, name, size}, {color}) {
    return `${color} The file ${name} .${extension} is of size ${size}`
}
console.log(fileSummary(savedFIle, {color : "red"}));

//Example 3 Destructuring arrays
const company = ["Google", "Facebook", "Uber"]

const [name1, name2, ...rest] = company;

console.log(name1);
console.log(name2);
console.log(rest);

//Example 4 Destructuring array and object at the same time