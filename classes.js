//creating classes in ES6
class Car {
    constructor({title}) { //This is the constructor function with a destructured object
        this.title = title;
    }

    drive() { //using enhance object literal to create a methods in js
        return "vroom"; 
    }
}

//creating a class of toyota
class Toyota extends Car { //This extends all the properties of Car to Toyota
    constructor(options) {
        super(options); 
        this.color = options.color;
    }

    honk() {
        return "beep";
    }
}

const toyota = new Toyota({color: 'red', title: 'daily drive'});
console.log(toyota.drive());
console.log(toyota);


