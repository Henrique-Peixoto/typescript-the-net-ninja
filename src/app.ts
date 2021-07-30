
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const docFour: Resource<string> = {
//   uid: 1,
//   resourceName: 'its name',
//   data: '2021'
// };

// const docFive: Resource<object> = {
//   uid: 2,
//   resourceName: 'another name',
//   data: {day: '29', year: '2021'}
// }

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docOne: Resource<string> = {
  uid: 0,
  resourceName: ResourceType.BOOK,
  data: 'today'
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.PERSON,
  data: {day: '30', year: '2021'}
}

console.log(docOne, docTwo);
