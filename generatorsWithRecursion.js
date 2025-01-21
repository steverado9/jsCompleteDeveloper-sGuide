class Comment {
    constructor (content, children) {
        this.content = content;
        this.children = children;
    }
    // The * means we are about to write a generator function
    *[Symbol.iterator] () { //This is how we write methods inside a class(enhanced object literals) 
        yield this.content;
        for (const child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
];

const tree = new Comment("Great Post!", children)

const values = [];
for (const value of tree) {
    values.push(value);
}
console.log(values);

