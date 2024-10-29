

function random(){
    console.log(Math.random());

}
random.call();

const teacher = {
    firstName: "Minh",
    lastName:"Thu",
}
const me = {
    firstName: "Hoai",
    lastName: "Nam",
    showFullName(){
        console.log(`${this.firstName} ${this.lastName}`)

    }
}

me.showFullName.call(teacher);



function Animal(name,weight){
    this.name = name
    this.weight = weight;
}

function Chicken(name,weight,legs){
    Animal.call(this);
    this.legs = legs;
}

const ck = new Chicken('KFC','18',2);
