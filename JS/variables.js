const accountId = 144553
let accountEmail = "avinashmarabhal7@gmail.com"
var accountPassword = "12345"
accountCity = "Rahuri" //another way of declaring let , not recommended
let accountState  // if we don't define variable it's defualt value would be undefined 

// accountId = 2 // not allowed

accountEmail = "avinash@gmail.com"
accountPassword = "2165485"
accountCity = "PUNE"

// console.log("hii");
// console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


/*
Prefer not to use 'var'
because of issue in block scope and function scope
*/