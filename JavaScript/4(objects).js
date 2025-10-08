let p1 = {
  name: "Lavish",
  address: "Kusmara",
};
//spread operator
//  let p2 ={
//     ...p1
//  }

//problem of nested objects
//inner obj address is copied
//shallow copy

//Deep Copy

const p1string = JSON.stringify(p1);
console.log(p1string); 
let p2 = JSON.parse(p1string);

//obj -> string -> obj
