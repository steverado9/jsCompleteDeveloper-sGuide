const getMessage = () => {
    const year = new Date().getFullYear();

    return ` The year is ${year}`;
}
const result = getMessage();
console.log(result);
