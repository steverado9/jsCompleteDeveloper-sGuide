//Generator function syntax Example 1
function* shopping() {
    //stuff on the side walk

    //walking down the sidewalk

    //go into the store with cash
    const stuffFromStore = yield 'cash';

    //walking to laundry place
    const cleanClothes = yield "laundry";

    //walking back home
    return [stuffFromStore, cleanClothes]

}
//stuff in the store
const gen = shopping();
console.log(gen.next()); //leaving our house
//Walked into the store
//Walking up and down into the aisle 
//purchase our stuff
console.log(gen.next('groceries')); // leaving the store with groceries
console.log(gen.next('clean clothes'));



//Example 2
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gene = colors();
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());

const myColors = [];

for (const color of colors()) { //for of loops works perfectly on the generator colors()
    myColors.push(color);
}
console.log(myColors);

