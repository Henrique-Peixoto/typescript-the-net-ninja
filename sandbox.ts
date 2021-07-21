// Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = '35';

// Arrays
let cars: string[];

cars.push('Lightning McQueen');

// Union types
let id: string | number;
id = '123';
id = 123;
// id = false;

let boats: (string | number | boolean)[] = [];
boats.push('Ship');
boats.push(4);
boats.push(true);

// Objects
let ninjaOne: object;
ninjaOne = {name: 'Naruto', age: 33};
ninjaOne = ['HI'];

let ninjaTwo: {
  name: string,
  age: number,
  isHidden: boolean
}

ninjaTwo = {name: 'Sasuke', age: 34, isHidden: false};