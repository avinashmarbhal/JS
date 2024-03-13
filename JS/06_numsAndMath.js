const score = 400

// console.log(score);

const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // to limit how many dighit you want after a decimal point

const otherNummber = 123.8966

// console.log(otherNummber.toPrecision(3))

const hundreds = 100000

// console.log(hundreds.toLocaleString('en-IN'))//=>1,00,000





// +++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math.abs(-4)); // with the help of abs(absolute) we can convert Nagetive value into positive one

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const  min = 10
const  max = 30

console.log(Math.floor(Math.random()*(max-min+1)) + min);