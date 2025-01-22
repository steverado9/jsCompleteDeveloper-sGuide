//use for each on the array
//input process output
const arrNames = ['james', 'fola', 'buju', 'monaky', 'bella']

function getNames(names) {
    return names.forEach(name => console.log('forEach', name));
}
getNames(arrNames);

//use map method on the array 
const Arrnumbers = [8, 4, 2, 9, 5];

function double(numbers) {
    return numbers.map(number => number * 2)
}
const result = double(Arrnumbers);
console.log('map', result);

//use the filter method on the array
const post = { id: 4, title: 'New Post' }

const comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was okay' },
    { postId: 4, content: 'neat' },
]

function filterContent(contents) {
    return contents.filter(content => content.postId === post.id)
}
const newContent = filterContent(comments);
console.log('filter', newContent);

//use the find method
const users = [
    { name: 'Stephen' },
    { name: 'Alex' },
    { name: 'Joseph' },
]

function findUser(users) {
    return users.find(user => user.name === 'Alex')
}
const user = findUser(users);
console.log('find', user);

//every method
const computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Copaq', ram: 4 },
    { name: 'Acer', ram: 16 },
]

function ramGreaterthan16(computers) {
    return computers.every(computer => computer.ram > 16)
}
const isramGreaterThan16 = ramGreaterthan16(computers);
console.log('every', isramGreaterThan16);

//some method
function getRam(computers) {
    return computers.some(computer => computer.ram > 16);
}
const SomeRamGreaterThan16 = getRam(computers);
console.log('some', SomeRamGreaterThan16);

//reduce method example 1
const integers = [2, 7, 10, 3, 79, 25];

function sumNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0)
}
const solution = sumNumbers(integers);
console.log('reduce', solution);

//reduce Example 2
const primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'},
]

function getPrimaryColors(primaryColors) {
    return primaryColors.reduce((previous ,primaryColor) => {
        previous.push(primaryColor.color);
        return previous;
    }, [])
}
const onlyPrimaryColors = getPrimaryColors(primaryColors)
console.log('reduce', onlyPrimaryColors);

//reduce Example 3
function balancedParens(strings) {
    return !strings.split('').reduce((previous, string) => {
        if(previous < 0) {return false};
        if(string === "(") {++previous};
        if (string === ")") {--previous};
        return previous;
    }, 0)
}
const check = balancedParens("((");
console.log('reduce', check);

//For of loop
let elements = ['hydrogen', 'oxygen', 'helium', 'argon', 'aluminum'];
for (const element of elements) {
    console.log('forOfLoop', element);
}










