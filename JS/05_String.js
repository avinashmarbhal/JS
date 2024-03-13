const name = "Avinash" //1 way to define strings 
const repoCount = 50

// console.log(name + repoCount + "Value"); // outdated

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// its called string interpollation

const gameName = new String('Avinash');//2 way to define strings

console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("n"));

const newString = gameName.substring(0, 4) // if we use this then the value at the last is not included
console.log(newString);

const anotherString = gameName.slice(-7,4) // we can use nagative values in slice only

console.log(anotherString);

const newStringOne = "   Avinash "
console.log(newStringOne);
console.log(newStringOne.trim());//it removes the spaces in the strings for easy compution

const url = "https://avinash.com/avinash%20marbhal" // *******

console.log(url.replace('%20','-'))// **********

console.log(url.includes('com'))

console.log(gameName.split('a'))// we can spit it wit any character 