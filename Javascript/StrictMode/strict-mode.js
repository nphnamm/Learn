"use strict"

// fullName = 'Nguyen van A';

// function testFunc(){
//     age = 18;

// }
// testFunc();
// console.log(fullName);
// console.log(age);

const student = {}

Object.defineProperty(student,'fullName',{
    value: 'Nguyen Van A',
    writable: true,


})
student.fullName = 'Nguyen van B'
console.log(student.fullName);