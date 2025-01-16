const computers = [
    {name: 'Apple', ram: 24},
    {name: 'Copaq', ram: 4},
    {name: 'Acer', ram: 16},
]

let allComputersCanRunProgram = true;

let someComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
    const computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        someComputersCanRunProgram = true;
    } 
}
console.log(allComputersCanRunProgram);
console.log(someComputersCanRunProgram);

//Using every helper
//Example 1
let result = computers.every(function(computer) {
    return computer.ram > 16;
})
console.log(result);


//Example 2
//check if the length of each name is greater then 4
let names = ['Alexander', 'Mattew', 'joe'];

const answer = names.every(function(name) {
    return name.length > 4;
})
console.log('answer', answer);

//Example 3
//form validation
function Field(value) {
    this.value = value;
} 

Field.prototype.validate = function() {
    return this.value.length > 0;
}

let username = new Field('2cool');
let password = new Field('my_password');
let birthday = new Field('10/10/2010');

const field = [username, password, birthday]

const formIsValid = field.every(function(field) {
    return field.validate();
})

console.log(formIsValid);




