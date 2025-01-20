//Example 1 with single statement after the arrow function
const add = (a, b) => a + b;

let result = add(2, 3);
console.log(result);

//Example 2 with single argument, you can remove the parenthesis
const double = number => number * 2;
const answer = double(5);
console.log(answer);

//Example 3, if there are no arguments, the parenthesis stays on
const number = () => {
    return 2
}
const value = number();
console.log(value);

//Example 4, using arrow function as call back function 
const myArry = [1, 2, 3];

const solution = myArry.map(arr => arr * 2)
console.log(solution);

//Example 5
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'super squad',
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
}

const reslt = team.teamSummary();
console.log(reslt);



