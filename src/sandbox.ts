// Function signatures

// Example 1 - Function signature
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string): void => {
  console.log(`${name} says ${greeting}`);
}

// Example 2 - Implicity return type
let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string) => {
  if(action === 'add'){
    return numberOne + numberTwo;
  }else{
    return numberOne - numberTwo;
  }
}

// Example 3 - Function signatures with objects
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

// with type aliases
type person = {name: string, age: number};

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);  
}

// Example 4 - Function signature with optional parameters
let showCarDetails: (name: string, year: number, hasFourWheels?: boolean) => void;

showCarDetails = (name: string, year: number) => {
  console.log(`The ${name} was first produced in ${year}`);
}

showCarDetails = (name: string, year: number, hasFourWheels?: boolean) => {
  console.log(`The ${name} was first produced in ${year}`);
  if(hasFourWheels){
    console.log('It has four wheels.');
  }else{
    console.log('It doesn\'t has four wheels.');
  }
}