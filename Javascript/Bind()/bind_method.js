// this.firstName = "Minh"
// this.lastName = "Thu"

// const teacher ={
//     firstName: "Minh",
//     lastName: "Thao",
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const student ={
//     firstName: "Hoai",
//     lastName: "Nam",


// }

// console.log(teacher.getFullName())


// const getTeacherName = teacher.getFullName.bind(student);

// console.log(teacher.getFullName);
// console.log(getTeacherName);
// console.log(getTeacherName());


// const teacher ={
//     firstName: "Minh",
//     lastName: "Thao",
//     getFullName(){
//         console.log( `${this.firstName} ${this.lastName}`);
//     }
// }
// // const student ={
// //     firstName: "Hoai",
// //     lastName: "Nam",
// // }


// const button = document.querySelector('button')
// // button.onclick = function(){

// //     teacher.getFullName();
// // }
// button.onclick = teacher.getFullName();


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() =>{
    const cars = ['BMW']

    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');
    return {
        add(car){
            cars.push(car)
        },
        delete(index){
            cars.splice(index,1);
        },
        render(){
            const html = cars.map(car => `
                <li> ${car} </li>
            `).join('');

            root.innerHTML = html;

        },
        init(){
            
            submit.onclick = () =>{
                const car = input.value;
                this.add(car);
                this.render();

                input.value =null
                input.focus();
            }

            this.render();

        }
    }


})();

app.init()

