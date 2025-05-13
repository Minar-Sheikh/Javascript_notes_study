/* Data types are divided into two categories primitive data types and non-primitive data types */


// Primitive (Call by value -> A duplicate copy is given, not original value)
// 7 type -> String, Number , boolean ,null , undefined , bigInt , Symbol


// JS is dynamically Typed.
// Because we are not defining int,string and boolean etc.
// Ex:
let score = 33; //Not define that it is a number(like in C++ {int score = 33})



let userEmail;  // undefined
let currentTemperature = null; // Value is empty not 0;

const id = Symbol('123'); // Define unique value
const anotherId = Symbol('123')// Symbol make both values unique lets check
console.log(id === anotherId); // false


let bigNumber = 74374832748n; // bigInt
console.log(typeof bigNumber);



// Non-Primitive(Call by Referance -> Original reference is given,if you change the value original 
//                                    value is changed)
// 3 types -> Array , objects , Functions

// Array
let games = ["Free-fire" , "Fc-Mobile" , "Car- race"];

//Object
let myObject = {
    name: "Minar Sheikh",
    UserNmae: "Minar" , 
    Age : "20"
}

//Function
let myFunction = function(){
console.log("Hello World!");
}

// typeof null is object
console.log(typeof null); //Object
console.log(typeof currentTemperature); // See line number 16

//Return type of all Non-primitive data types is object or function-object.
console.log(typeof myFunction);// function
//Showing output function but generally it is function-Object.