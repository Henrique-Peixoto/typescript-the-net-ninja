"use strict";
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
const docFour = {
    uid: 1,
    resourceName: 'its name',
    data: '2021'
};
const docFive = {
    uid: 2,
    resourceName: 'another name',
    data: { day: '29', year: '2021' }
};
