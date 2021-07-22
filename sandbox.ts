// Simple variables
let age: any = 25;
age = 'Hello';
age = false;


// Objects
let book: {
  name: any,
  pages: any
};

book = {
  name: 'The Hobbit',
  pages: 353
};

book = {
  name: 353,
  pages: 'The Hobbit'
};

// Any and explicit types
let ninja: {
  name: any,
  age: number
}

ninja = {
  name: true,
  age: 25
}
