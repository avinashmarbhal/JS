//<<< Converting into Number>>>

let score = "33"//if we convert this string into number then it will be converted to number
//let score = "33aa"// if we convert this string into number then it will be converted to NaN(Not a number)
//let score = "Avinash"//if we convert this string into number then it will be converted to NaN(Not a number)
//let score = null //if we convert this  into number then it will be converted to 0
//let score = undefined // if we convert this  into numb
er then it will be converted to NaN(Not a number)
//let score = true // if we convert this  into number then it will be converted to 1 and for false it would be 0

//console.log(typeof score);


let valueInNumber = Number(score)

//console.log(typeof (valueInNumber));
// console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN(not a number)
//true => 1; false => 0


//<<< Converting into Boolean >>>>

let isLoggedIn = "Avinash";

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

//1=> true; 0=> false
//""=> false
//"AVinash" => true


// <<<< Converting Into Strings >>>>

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);

// ******************* Operations *****************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);//2 rest to 3
// console.log(2/2);
// console.log(2%2);


let str1 = "hello"
let str2 = " Avinash"
let str3 = str1+str2
//console.log(str3);


// console.log("1"+2);// => 12
// console.log(1+"2");// => 12
// console.log("1"+2+"2");// => 122
// console.log(1+2+"2");// => 32

let gameCounter = 100
++gameCounter;
console.log(gameCounter);






