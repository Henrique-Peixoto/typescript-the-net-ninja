// Generics
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne.name);

// With interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docFour: Resource<string> = {
  uid: 1,
  resourceName: 'its name',
  data: '2021'
};

const docFive: Resource<object> = {
  uid: 2,
  resourceName: 'another name',
  data: {day: '29', year: '2021'}
}