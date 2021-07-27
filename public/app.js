"use strict";
const me = {
    name: 'Henrique',
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
let someone;
const greetPerson = (person) => {
    console.log('Hello, ', person.name);
};
greetPerson(me);
