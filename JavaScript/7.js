//Important
Function.prototype.describe=function(){ 

    console.log(`fUNCTION name is ${this.name}`)
};

function greet(name){
    return `Hello ${name}`;
}
console.log(greet("Lavish"));
greet.describe();



