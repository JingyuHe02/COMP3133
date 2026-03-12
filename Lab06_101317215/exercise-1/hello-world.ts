let firstName: string = "John";
let lastName: string = "Doe";

const greet = (first: string, last: string): void => {
    console.log(`Hello ${first} ${last}`);
};

greet(firstName, lastName);