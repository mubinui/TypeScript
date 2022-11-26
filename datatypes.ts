let mynumber:number = 100;
let my_string: string = "My String";
let my_notstring : number = 100;
//console.log(my_notstring.toUppercase())
let isEmpty:boolean  = true;
console.log(my_string+" "+mynumber);
// any type can hold all kind of data
let a : any = "Mubin"
a = 100;
console.log(a)
a = true
console.log(a)
// unknown data-type in typescript
let un:unknown = 1;
un = "Mubin "
console.log(typeof un)
// Never type throws an error whenever it is defined
// let x: never = true
// if (x){
//     console.log("Executing Never type ")
// }
// Undefined and null type d-type
let und : undefined = undefined;
let null_type: null = null;
console.log(und, null_type)



