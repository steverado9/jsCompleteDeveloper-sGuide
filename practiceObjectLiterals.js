const object = {
    name: 'stephen',
    age: 10,
    course: 'javascript'
}

function newObject(obj) {
    const {name, age, course} = obj;
    console.log(name);
    
}
newObject(object)