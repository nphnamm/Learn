// const teacher = {
//     firstName: "Minh",
//     lastName:"Thu",
// }

// function greet(greeting, message){ 
//     return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;

// }
// let result = greet.apply(teacher,['Em chao co','co day mon gi the a'])
// console.log(result)

// result = greet.call(teacher,'Em chao co','co day mon gi the a')
// console.log(result)


const teacherW = {
    firstName: "Minh",
    lastName:"Thao",
    isOnline: false,
    goOnline(){
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is Online`);

    },
    goOffline(){
        this.isOnline = false
        console.log(`${this.firstName} ${this.lastName} is Offline`);
        
    }
}


const me = {
    firstName: "Hoai",
    lastName: "Nam",
    isOnline:false,
    
}
console.log('teacher: ', teacherW.isOnline);
teacherW.goOnline();
console.log('teacher: ', teacherW.isOnline);

console.log('me: ', me.isOnline);
teacherW.goOnline.call(me);
console.log('me: ', me.isOnline);