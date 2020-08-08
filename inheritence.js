class Parent{
    constructor(){
        this.fatherName = "John";
    }
}



class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
}

const baby = new Child("Arnold");
const baby2= new Child("Tom");
console.log(baby);
console.log(baby2)
