// Implicity function type
let greet = () => {
  console.log('Hello, World!');
}

// greet = 'Hello, World!';

// Explicity function type
let hello: Function;

hello = () => {
  console.log('Hello!');
}

// Function using parameters with type
let add: Function;

add = (a: number, b: number) => {
  console.log(a + b);
}

add(5,10);

// Parameter with question mark
const add2 = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
}

add2(5,10);
add2(5,10,25);

// Parameter with default value
const add3 = (a: number, b: number, c: number | string = 'Hi') => {
  console.log(a + b);
  console.log(c);
}

add3(5,10);
add3(5,10,-1);

// Function return

// Returning void
const add4 = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  console.log(c);
}


// Returning a number
const add5 = (a: number, b: number): number => {
  return a + b;
}

let sumResult = add5(20,1);
console.log(sumResult);