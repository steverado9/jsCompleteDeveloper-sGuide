//Some helper 
//Example 1
const computers = [
    {name: 'Apple', ram: 24},
    {name: 'Copaq', ram: 4},
    {name: 'Acer', ram: 16},
]

const result = computers.some(function(computer) {
    return computer.ram > 16;
})
console.log(result);

//Example 2
//check if the length of each name is greater then 4
let names = ['Alexander', 'Mattew', 'joe'];

const answer = names.some(function(name) {
    return name.length > 4;
})
console.log(answer);

