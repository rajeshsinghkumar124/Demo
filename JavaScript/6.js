const obj1={
    fname:"Lavish",
    lname:"Shakya",
    getFullName: function(){
        return `${this.fname} ${this.lname}`
    },
};

const obj2= {
    fname:"Vansh",
    lname:"Shakya"
};

console.log(obj1.getFullName());
console.log(obj2);