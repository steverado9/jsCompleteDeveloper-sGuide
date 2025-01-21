//generator combined with the for Of loop
const testingTeam = {
    lead: 'amanda',
    tester: 'bill',
    [Symbol.iterator]: function* () { //we are using [Symbol.iterator] key to tell the for loop how to iterate through this object
        yield this.lead; //the this keyword is a reference to the testingTeam object
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam, //always move duplicate key value pair to the top of the object
    size: 3,
    department: 'Engineering',
    lead: 'jill',
    Manager: 'alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.Manager;
        yield this.engineer;
        yield* this.testingTeam; //The * will cause the for of loop to fall into this trap and loop through the testingTeam

    }
}

let names = [];

for (const name of engineeringTeam) {
    names.push(name);
}

console.log(names);
