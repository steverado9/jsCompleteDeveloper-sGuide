//How to create a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000)
});
promise
    .then(() => console.log("Finally Finished"))
    .then(() => console.log("I was also called"))
    .catch(() => console.log("uh ho"))


