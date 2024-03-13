// the way they get stored in the memory and the way we can access them on the basis of that there are category of dataTypes in JS


// #### Primitive #####
//all this primative types are 'call by value' means whenever we copied them then the value of that dataType is get's copied and given to us, and all the cheges we done are done it the copie itself not in the orignal data

/* 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt */

const score = 100 //Number
const scoreVllaue = 100.3 //Number
const isLoggedIn = false //Boolean
const outsideTemp = null //null's dataType is Object
let userEmail //Undefined
let userEmail1 = undefined //undefined

const id = Symbol('123')  //Symbol  even if we pass a same value in two diffrent symbols then also they are not same  
const anotherId = Symbol('123') //Symbol   id != anotherID

//console.log(id === anotherId) =>false

const bigNumber = 9584756852495856856745767 //big int if the vlaue is greater than the number dataTypes capacity 
const bigNumber1 = 555554454464488n//you can also add 'n' at the end of the string to denote its an  bigInt







// #### non-Primitive(Reference) ####

/* 3 Types: Array, Object, Functions*/

const heros = ["shaktiman", "naagraj", "doga"] // Array

let myObj = { 
    name: "Avinash",
    age: 22
} //int the object Type you can have any dataType like string, number, array, object, fuction etc..

const myfunction = function(){
    console.log("Hello World");
}  // you can also store a function inside a variable


//console.log(typeof bigNumber);



// *** results of Typeof ***
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object