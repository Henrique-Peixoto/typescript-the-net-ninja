"use strict";
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
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const docOne = {
    uid: 0,
    resourceName: ResourceType.BOOK,
    data: 'today'
};
const docTwo = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: { day: '30', year: '2021' }
};
console.log(docOne, docTwo);
