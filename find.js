//find helper
//Example 1
let users = [
    {name: 'Stephen'},
    {name: 'Alex'},
    {name: 'Joseph'},
]

const user = users.find(function (user) {
    return user.name === 'Alex'
})
console.log(user);

//Example 2
function Car (model) {
    this.model = model;
}

let cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
]

const result = cars.find(function (car) {
return car.model === "Focus";
})
console.log(result);

//Example 3
let posts = [
    {id: 1, title: "New Post"},
    {id: 2, title: "Old Post"}
];

let comment = { postId: 1, content: 'Great Post'};

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId ;
    })
}
const viewResult = postForComment(posts, comment);
console.log('post', viewResult);





