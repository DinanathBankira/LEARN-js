class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return `Hello, My name is ${this.name}.I am ${this.age} year old`;
        // return `I am ${age} year old`;
    }
}
const person1=new person('banku',21);
console.log(person1.greet());