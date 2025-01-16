const products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'orange', type: 'fruit'}
]

let filteredProduct = [];

for(let i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProduct.push(products[i]);
    }
}
// console.log(filteredProduct);

//Using the filter helper 
//Example 1
const filter = products.filter(function(product) {
    return product.type === 'fruit';
})
console.log(filter);

//Example 2
const goods = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'cucumber', type: 'fruit', quantity: 10, price: 15},
    {name: 'cucumber', type: 'vegetable', quantity: 30, price: 13},
    {name: 'cucumber', type: 'fruit', quantity: 5, price: 3}
];

const answer = goods.filter(function(good) {
    return good.type === 'fruit' 
    && good.quantity > 0 
    && good.price < 10
})
console.log(answer);

//Example 3
const post = {id: 4, title: 'New Post'}

const comments = [
    {postId : 4, content : 'awesome post'},
    {postId : 3, content : 'it was okay'},
    {postId : 4, content : 'neat'},
]

function commnetsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    })
}
const display = commnetsForPost(post, comments);
console.log(display);




