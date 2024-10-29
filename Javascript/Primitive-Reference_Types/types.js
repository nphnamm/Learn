// function sum(a,b){
//     a=0;
//     b=0
//     console.log(a,b);
// }
// const c = 1;
// const d = 2;
// sum(c,d)
// console.log(c,d);


function func(obj){
    obj = JSON.parse(JSON.stringify(obj));
    obj.name = 'Mercedes'
    return obj
}

const a = {
    name: 'BMW'
}


const newCar = func(a);

console.log(a);
console.log(newCar)