// singleton
Object.create


//object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Avinash",                 
    "full name": "Avinash Marbhal", //we can also give key name in string format 
    age:24,                     // but even we don't it automatically take it as 'string'
    lcation: "PUNE",            //when a key is given in string formmat with 'space in between' then it can't be access by a 'JsUser.key' this way we have to use JsUser["key"] only
    email:"avinash@gmail.com",
    isLOggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]:"Avinash" //for using symbol in object you have to create one first outside the object and just simpy you have to refer to that symbol by givein sqare brakets to the key
}  //all the key we are given like email,age etc.. are in the string form

// console.log(JsUser.email);
// console.log(JsUser["email"]); //if we want to access object using this way 
//                             //we have to give a string value

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // to accaess the symbol you required to use this way '[]' only and without quotes("") 

JsUser.email = "avi@gmail.com" // for changing the values of object

//Object.freeze(JsUser) //if we  don't wnat to allow anyone to change the values of the object then we can use this 
                    // after using this you cna't do cnahges in the object's value

// console.log(JsUser)


JsUser.greeting = function(){    //this way you can define a function in Object 'Object.funName'
    console.log("hello Js user");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`); // by unsig this keyword you can access the current object
} // (`hellow js user,${this.name}`) this is called string interpolation

console.log(JsUser.greeting());
console.log(JsUser.greeting2());




