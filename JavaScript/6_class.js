class Person {
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

const  p1=new Person('Lavish', "Shakya");

console.log(p1.getFullName())